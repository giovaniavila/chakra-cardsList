import { Box, Flex, Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Flex>
        <Box>
            <ChakraLink as={ReactRouterLink} to="/">Home</ChakraLink>
        </Box>
        <Box>
            <ChakraLink as={ReactRouterLink} to="/AddCard">Add card</ChakraLink>
        </Box>
    </Flex>
  )
}

export default Sidebar
