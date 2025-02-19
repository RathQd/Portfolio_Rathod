import React from "react";
import { Box, Heading, Text, VStack, Icon, Separator } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <Box
      textAlign="center"
      maxW={{ base: "90%", md: "400px" }} // Responsive width
      mx="auto"
      color="white"
      p={{ base: 4, md: 6 }} // Responsive padding
      borderRadius="lg"
      boxShadow="md"
    >
      <Separator mb={4} />
      <Heading size={{ base: "lg", md: "xl" }} mb={4} >
        Get In Touch
      </Heading>
      <VStack spacing={{ base: 2, md: 3 }} align="center">
        <Text fontSize={{ base: "sm", md: "md" }}>
          <Icon as={FaMapMarkerAlt} color="red.400" mr={2} />
          India
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          <Icon as={FaPhone} color="blue.400" mr={2} />
          +91 9979793462
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          <Icon as={FaEnvelope} color="green.400" mr={2} />
          dharmraj98r@gmail.com 
        </Text>
      </VStack>
      <Separator mt={4} />
    </Box>
  );
};

export default GetInTouch;
