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
            Yagnik Bharadwa
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
            I'm an M.Tech graduate from IIIT Bangalore with experience in web development, data analytics, and security systems. I co-led a project on old age management, interned at HP Insights Lab, and now work at PAYU (Wibmo) on authentication and transaction security. Passionate about technology and innovation, I thrive in dynamic, collaborative environments.
          </MotionText>

          {/* Button - Zooms in */}
          <MotionButton
            as="a"
            href="/Yagnik_Bharadwa_Feb.pdf"
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
          width={{ base: "185px", md: "300px", lg: "450px" }}
          height={{ base: "185px", md: "250px", lg: "450px" }}
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
            src="./yagnik.jpeg"
            alt="Yagnik"
            objectFit="contain"
            ml={{ base: "10px", md: "10px", lg: "10px" }}
            transform="scale(1.25)"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1.25 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.4 }} // Zoom effect on hover
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
