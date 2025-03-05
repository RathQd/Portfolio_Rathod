import React, { useState } from "react";
import { Flex, Link, Button, VStack, Portal } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { CgMenuOreos } from "react-icons/cg";
import { TbMenu3 } from "react-icons/tb";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react"; // Ensure you have Radix UI installed

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Technologies", id: "technologies" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "timeline" },
  { name: "Get In Touch", id: "get-in-touch" },
];

const SecondaryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <Flex
        display={{ base: "none", md: "flex" }}
        position="fixed"
        left="50%"
        transform="translateX(-50%)"
        backgroundColor="transparent"
        // bg="gray.900"
        color="white"
        
        py={2}
        px={4}
        justify="center"
        width={{ md: "60%", lg: "50%" }}
        h="40px"
        borderRadius="xl"
        border="0px solid"
        gap={6}
        zIndex={1000}
        // boxShadow="inset 0px 4px 10px rgb(39, 39, 39)" 
        _hover={{backgroundImage:"linear-gradient(to bottom right, rgb(1, 19, 26), rgb(4, 28, 56))"}}
        // boxShadow="dark-lg"
      >
        {navLinks.map(({ name, id }) => (
          <ScrollLink key={id} to={id} smooth={true} duration={500} spy={true} offset={-70}>
            <Link fontSize="md" color="gray.300" textDecoration="none" _hover={{ color: "white" }}>
              {name}
            </Link>
          </ScrollLink>
        ))}
      </Flex>

      {/* Mobile Hamburger Menu */}
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            display={{ base: "flex", md: "none" }}
            position="fixed"
            top="28px"
            color="white"
            right="0"
            zIndex={2}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            onClick={toggleMenu}
          >
            <TbMenu3 size={28} />
          </Button>
        </MenuTrigger>
        {isOpen && (
          <Portal>
            <MenuContent
              position="fixed"
              top={0}
              right={0}
              width="200px"
              height="40%"
              backgroundImage="linear-gradient(to bottom right, rgb(1, 19, 26), rgb(4, 28, 56))"
              boxShadow="lg"
              zIndex={20}
              p={4}
              display="flex"
              flexDirection="column"
            >
              {/* Close Button */}
              <Button color="white" onClick={toggleMenu} mb={4} variant="ghost">
                Close
              </Button>
              <VStack 
                    backgroundImage="linear-gradient(to bottom right, rgb(1, 19, 26), rgb(4, 28, 56))"
                    align="start" 
                    spacing={4} 
                    p={4} 
                    borderRadius="md"
                    boxShadow="dark-lg"
                    width="full"
                    color="white"
                    >
  {navLinks.map(({ name, id }) => (
    <ScrollLink 
      key={id} 
      to={id} 
      smooth={true} 
      duration={500} 
      spy={true} 
      offset={-70} 
      onClick={toggleMenu} 
      style={{ width: "100%" }} // Ensures full clickable area
    >
      <MenuItem 
        width="full" 
        backgroundImage="linear-gradient(to bottom right, rgb(1, 19, 26), rgb(4, 28, 56))"
        _hover={{ 
          bg: "rgba(255, 255, 255, 0.1)", // Subtle hover effect 
        }}
      >
        <Link fontSize="lg" color="white" _hover={{ color: "teal.300" }}>
          {name}
        </Link>
      </MenuItem>
    </ScrollLink>
  ))}
</VStack>
            </MenuContent>
          </Portal>
        )}
      </MenuRoot>
    </>
  );
};

export default SecondaryNavbar;
