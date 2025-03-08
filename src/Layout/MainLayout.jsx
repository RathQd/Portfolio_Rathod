import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex } from "@chakra-ui/react";
import Navbar from '@/components/Navbar';
import SecondaryNavbar from '@/components/SecondaryNavbar';

const MainLayout = () => {
  return (
    <Flex
      backgroundImage="linear-gradient(to bottom right, #2f3e46, rgb(0, 0, 0))"
      minH="100vh"
      direction="column"
    >
      <Navbar mb ="200px"/>
      <SecondaryNavbar />
      <Box as="main" pt="50px" w="100%">
          <Outlet />
      </Box>
    </Flex>
  )
}

export default MainLayout;
