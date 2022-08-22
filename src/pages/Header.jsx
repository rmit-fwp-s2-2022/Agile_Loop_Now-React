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

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div class="fpad">
      <Flex minWidth="max-content" alignItems="center" gap="4">
        <Box p="2">
          <Heading pl="90px" size="md">
            Loop-Agile-Now
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" pr="10px">
          <Button colorScheme="teal" variant="ghost">
            Sign Up
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Log in
          </Button>
          <IconButton
            variant="outline"
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </ButtonGroup>
      </Flex>
      {/* <div class="container-fluid">
        <div class="header justify-content-between">
          <div>
            <IconButton
              variant="outline"
              icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            ></IconButton>
          </div>
          <div class="row">
            <Box flex="1" h="20" bg="tomato">

            </Box>
            <h1 class="navbar-brand ">Loop-Agile-Now</h1>
            <div>
              <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="teal" variant="ghost">
                  Login
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  SignUp
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div> */}

      {/* <Flex color="white">
        <Center w="80px" bg="tomato">
          <IconButton
            variant="outline"
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Center>
        <Box flex="1" h="20" bg="tomato">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}
          >
            <h1> Loop-Agile-Now</h1>
          </div>
        </Box>
      </Flex>

      <h1>hello</h1> */}
    </div>
  );
}
export default Header;
