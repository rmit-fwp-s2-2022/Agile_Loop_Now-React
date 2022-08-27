import {
  Box,
  Container,
  Flex,
  Avatar,
  Heading,
  Textarea,
  IconButton,
  Button,
  Spacer,
  ButtonGroup,
  useDisclosure,
  Collapse,
  Text,
  Editable,
  EditablePreview,
  EditableTextarea,
} from "@chakra-ui/react";

import axios, { Axios } from "axios";

import React from "react";
import { getPosts, createPost } from "../data/Posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import EditableControls from "./EditableControls";
import { useEffect, useState } from "react";

function Forum(props) {
  const hiddenFileInput = React.useRef(null);
  const { isOpen, onToggle } = useDisclosure();
  const [posts, setPosts] = useState(getPosts());
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageLink, setImageLink] = useState("");

  const API = "https://api.cloudinary.com/v1_1/aglie-loop/image/upload";

  //This function calls an API from Cloundinary and stores the images uploaded from the user in the cloud
  //Cloundinary returns a link to the image
  const onSubmit = async () => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "my-uploads");

    // await axios.post(API, formData).then((response) => {
    //   console.log(response);
    //   console.log(response.data.secure_url);
    //   setImageLink(response.data.secure_url);
    // });

    const link = await axios.post(API, formData);
    console.log(link.data.secure_url);
    setImageLink(link.data.secure_url);

    const post = {
      user: props.user.name,
      content: content,
      link: imageLink,
    };

    createPost(post);
    setPosts(getPosts());
  };

  const reset = () => {
    setContent("");
    setImage(null);
  };

  const onClick = () => {
    hiddenFileInput.current.click();
  };

  const uploadFile = (files) => {
    const image = files[0];
    console.log(image);
    setImage(image);
  };

  return (
    <Box minH={"87vh"}>
      <Container maxW="50%">
        <Box mb={2}>
          <Button colorScheme="teal" onClick={onToggle}>
            {isOpen ? "Cancel" : "Create Post"}
          </Button>
        </Box>

        <Collapse in={isOpen} animateOpacity>
          <Box p={4} rounded={"lg"} borderWidth={1}>
            <Flex>
              <Box pt={2} pb={2}>
                <Avatar bg="teal.500" size={"md"} />
              </Box>
              <Box>
                <Heading size="sm" mt={2} p={3}>
                  {props.user.name}
                </Heading>
              </Box>
            </Flex>
            {image !== null && (
              <>
                <div className="image-preview">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    height={200}
                    width={400}
                  />
                </div>
              </>
            )}
            <Textarea
              placeholder="What's on your mind?"
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <Flex mt={3}>
              <IconButton
                type={"file"}
                size={"sm"}
                colorScheme="orange"
                icon={<FontAwesomeIcon size="2xl" icon={faImage} type="file" />}
                onClick={onClick}
              />
              <input
                id="selector"
                type="file"
                style={{ display: "none" }}
                ref={hiddenFileInput}
                accept="image/*"
                onChange={(e) => uploadFile(e.target.files)}
              />
              <Spacer />
              <ButtonGroup>
                <Button colorScheme="teal" onClick={onSubmit}>
                  Post
                </Button>
                <Button onClick={reset}>Reset</Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </Collapse>

        {/*map goes here*/}
        <Box p={4} rounded={"lg"} borderWidth={1} mt={3}>
          <Flex>
            <Box pt={2} pb={2}>
              <Avatar bg="teal.500" size={"md"} />
            </Box>
            <Box p={3}>
              <Heading size="sm">User Name</Heading>
              <Text color={"gray.500"} fontSize={"xs"}>
                {" "}
                Posted On
              </Text>
            </Box>
          </Flex>

          <Editable defaultValue={"Sample forum..."} isPreviewFocusable={false}>
            <EditablePreview />
            <Textarea
              as={EditableTextarea}
              placeholder="What's on your mind?"
            />

            <Flex mt={3}>
              <IconButton
                size={"sm"}
                colorScheme="orange"
                icon={<FontAwesomeIcon size="2xl" icon={faImage} />}
              ></IconButton>

              <Spacer />
              <EditableControls />
            </Flex>
          </Editable>
        </Box>
      </Container>
    </Box>
  );
}

export default Forum;
