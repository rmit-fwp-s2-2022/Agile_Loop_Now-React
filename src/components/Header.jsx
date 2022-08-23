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
// import { useState } from "react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const [navColor, setNavColor] = useState(false);
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
    </div>
  );
}
export default Header;
