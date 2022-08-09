import { Flex, Box, useColorMode, Center, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex color="white">
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
            <h1> LAN </h1>
          </div>
        </Box>
      </Flex>

      <h1>hello</h1>
    </>
  );
}
export default Header;
