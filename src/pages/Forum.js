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
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import EditableControls from './EditableControls';
import { useState } from 'react';


function Forum(props){
    const { isOpen, onToggle } = useDisclosure();
   
    return(
        <Box minH={"87vh"}> 
            <Container maxW='50%'>
                
                <Box mb={2}>
                    <Button colorScheme='teal' onClick={onToggle} isDisabled={props.isLoggedIn}>{isOpen ? "Cancel" : "Create Post"}</Button>
                </Box>
                
                <Collapse in={isOpen} animateOpacity>
                    <Box p={4} rounded={"lg"} borderWidth={1}>
                        <Flex>
                            <Box pt={2} pb={2}>
                                <Avatar bg='teal.500' size={'md'}/>
                            </Box>
                            <Box>
                                <Heading size="sm" mt={2} p={3}>
                                    {props.user.name}
                                </Heading>
                            </Box>
                        </Flex>
                        <Textarea placeholder="What's on your mind?" />
                        <Flex mt={3}>
                            
                            <IconButton size={'sm'} colorScheme='orange' icon={<FontAwesomeIcon size='2xl' icon={faImage}/>} />
                        
                            <Spacer/>
                            <ButtonGroup>
                                <Button colorScheme='teal'>Post</Button>
                                <Button>Reset</Button>
                            </ButtonGroup>
                        </Flex>      
                        
                    </Box>
                </Collapse>

                <Box p={4} rounded={"lg"} borderWidth={1} mt={3}>
                    <Flex>
                        <Box pt={2} pb={2}>
                            <Avatar bg='teal.500' size={'md'}/>
                        </Box>
                        <Box p={3}>
                            <Heading size="sm">
                                User Name
                            </Heading>
                            <Text color={'gray.500'} fontSize={'xs'}> Posted On</Text>
                        </Box>
                    </Flex>

                    <Editable defaultValue={'Sample forum...'} isPreviewFocusable={false}>
                        <EditablePreview />
                        <Textarea as={EditableTextarea} placeholder="What's on your mind?" />
                        
                    
                    
                        <Flex mt={3}>
                            
                            <IconButton size={'sm'} colorScheme='orange' icon={<FontAwesomeIcon size='2xl' icon={faImage}/>} />
                        
                            <Spacer/>
                            <EditableControls/>
                        </Flex> 
                    </Editable>                   
                </Box>
            </Container>   
        </Box>
    );
}

export default Forum;