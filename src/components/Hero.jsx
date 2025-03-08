import React from "react";
import { Box, Heading, Text, Button, Image, VStack, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);
const MotionImage = motion.create(Image);

const Hero = () => {
  return (
    <Box
      minH="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: "5%", md: "8%", lg: "15%" }}
      key={Math.random()} // Forces re-animation when component is re-mounted
    >
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        spacing={{ base: 10, md: 30 }}
        mx={50}
        align="center"
        justify="center"
        w="full"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Left Side - Text Content */}
        <VStack align={{ base: "center", md: "flex-start" }} spacing={4} color="white">
      
          {/* Name Animation - Slides from left */}
          <MotionHeading 
            as="h1"
            mt={{ base: "40px" }}
            size={{ base: "2xl", md: "3xl" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Dharmraj Rathod
          </MotionHeading>

          {/* Job Title - Fades In */}
          <MotionText
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Software Engineer
          </MotionText>

          {/* Description - Slides from bottom */}
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="gray.400"
            width={{ base: "", md: "650px" }}
            lineHeight="tall"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Solution-driven software developer with expertise in FastAPI, PostgreSQL, and Python, building scalable backend systems. Skilled in Docker, containerization, automation, CI/CD, and testing for efficient workflows. Proficient in Git for version control and familiar with React & Node.js for full-stack development.
          </MotionText>

          {/* Button - Zooms in */}
          <MotionButton
            as="a"
            href="/DharmrajRathod.pdf"
            download
            colorScheme="teal"
            borderRadius="full"
            border="2px solid white"
            size="lg"
            _hover={{ bg: "teal.600" }}
            _active={{ bg: "teal.600" }}
            _focus={{ bg: "teal.600", outline: "none" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            Download Resume
          </MotionButton>

        </VStack>

        {/* Right Side - Animated Image */}
        <Box
          width={{ base: "165px", md: "300px", lg: "450px" }}
          height={{ base: "165px", md: "250px", lg: "430px" }}
          // ml={{ base: "45px", md: "0px", lg: "0px" }}
          borderRadius="full"
          border="2px solid white"
          overflow="hidden"
          boxShadow="2xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MotionImage
            src="./dharam1.PNG"
            alt="DharmrajRathod"
            objectFit="contain"
            mt={{ base: "80px", md: "0px", lg: "0px" }}
            ml={{ base: "0px", md: "30px", lg: "0px" }}
            mr={{ base: "15px", md: "45px", lg: "30px" }}
            transform="scale(1)"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.15 }} // Zoom effect on hover
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
