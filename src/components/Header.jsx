import {
  useColorMode,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Header(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="fpad">
      <Flex minWidth="max-content" alignItems="center" gap="4">
        <Box p="2">
          <Link to="/">
            <Button colorScheme="teal" variant="link">
              <Heading pl="90px" size="md">
                Loop-Agile-Now
              </Heading>
            </Button>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" pr="10px">
          {props.user === null ?  
          <Box>
            <Link to="/signup">
              <Button colorScheme="teal" variant="ghost">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="teal" variant="ghost">
                Log In
              </Button>
            </Link>
          </Box>
          :
          <Box>
            <Link to="/profile">
              <Button colorScheme="teal" variant="ghost">
                My Profile
              </Button>
            </Link>
            <Link to="/login">
              <Button colorScheme="teal" variant="ghost" onClick={props.logout}>
                Log Out
              </Button>
            </Link>
          </Box>

          }
          <IconButton
            variant="outline"
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </ButtonGroup>
      </Flex>
    </div>
  );
}
export default Header;
