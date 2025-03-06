import React from 'react'
import { Flex, Box, IconButton, Spacer, Image  } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { GiBowArrow } from "react-icons/gi";



const Navbar = () => {
  return (
    <Flex
        as="nav"
        w="100%"
        h="40px"
        p={2}
        color="white"
        align="center"
        position="sticky"
        zIndex={1}
    >
  <GiBowArrow size={40}/>
  <Spacer />
  <Flex gap={0}>
    <IconButton
      as="a"
      href="https://www.linkedin.com/in/yagnik-bharadwa/"
      target="_blank"
      aria-label="LinkedIn"
      variant="unstyled"
      color="white"
      _hover={{ color: "blue.400" }}
    ><FaLinkedin /></IconButton>
    <IconButton
      as="a"
      href="https://github.com/yagnik112358"
      target="_blank"
      aria-label="GitHub"
      variant="unstyled"
      color="white"
      _hover={{ color: "gray.300" }}
    >
    <FaGithub />
    </IconButton>
    {/* <IconButton
      as="a"
      href="#"
      target="_blank"
      aria-label="LeetCode"
      variant="unstyled"
      color="white"
      _hover={{ color: "orange.400" }}
    >
    <SiLeetcode />
    </IconButton> */}
    {/* <IconButton
      as="a"
      href="https://www.instagram.com/accounts/login/"
      target="_blank"
      aria-label="LeetCode"
      variant="unstyled"
      color="white"
      _hover={{ color: "#FF4500" }}
    >
    <FaInstagram size={25.5} />
    </IconButton> */}
  </Flex>
</Flex>
  )
}

export default Navbar
