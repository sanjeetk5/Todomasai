import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import Alltodos from "./Alltodos";
import Addtodo from "./Addtodo";
import Footer from "./Footer";

const Allcomponents = () => {
const {colorMode , toggleColorMode} = useColorMode()

  return (
    <Box>
      <Flex justifyContent={"space-evenly"} >
        <Heading>Todo</Heading>
        <Button
          bg="none"
          _hover={{
            bgColor: "none",
          }}
          onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MoonIcon boxSize={5} />
          ) : (
            <SunIcon boxSize={5} />
          )}
        </Button>
      </Flex>
      <Addtodo/>
      <Alltodos/>
      <Footer/>

    </Box>
  );
};

export default Allcomponents;
