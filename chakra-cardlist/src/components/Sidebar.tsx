import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import React from "react";
import AddCard from "../assets/addcard.svg";
import Home from "../assets/home.svg";

const Sidebar = () => {
  return (
    <Flex
      flexDirection="column"
      gap="20px"
      h="100vh"
      backgroundColor="#121E31"
      color="white"
      padding="25px"
    >
      <Box display="flex" flexDirection="column" gap="20px">
        <ChakraLink
          borderRadius="8px"
          _hover={{ backgroundColor: "#22284F" }}
          as={ReactRouterLink}
          to="/"
          textAlign="start"
        >
          <Text alignItems="center" padding="10px 20px" textAlign="start" display="flex" gap="10px">
            <Image src={Home} alt="" /> Home
          </Text>
        </ChakraLink>

        <ChakraLink
          _hover={{ backgroundColor: "#22284F" }}
          borderRadius="8px"
          as={ReactRouterLink}
          to="/AddCard"
        >
          <Text alignItems="center" padding="10px 20px" textAlign="start" display="flex" gap="10px">
            <Image src={AddCard} alt="" /> Add Card
          </Text>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Sidebar;
