import React from "react";
import { Card, Flex, Image, Box, Heading, Text, VStack, HStack, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MotionCard = motion.create(Card.Root);
const MotionImage = motion.create(Image);

const ProjectCard = (props) => {
  return (
    <MotionCard
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      bg="transparent"
      mb={0}
      maxW={{ base: "80%", md: "450px", lg: "700px" }}
      maxH={{ base: "80%", md: "250px", lg: "250px" }}
      mx="auto"
      color="white"
      border="0px solid"
      p={{ base: 1, md: 1, lg: 1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}
    >
      <HStack
        spacing={{ base: 3, md: 5, lg: 8 }}
        align="stretch"
        w="full"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Side - Image */}
        <Box
          flexShrink={0}
          w={{ base: "100%", md: "20%", lg: "40%" }}
          mt={10}
          borderRadius="md"
          justifyItems="center"
          overflow="hidden"
        >
          <MotionImage
            src="/src/assets/react.svg"
            alt="Project Image"
            objectFit="contain"
            w="55%"
            h="55%"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </Box>

        {/* Right Side - Project Details */}
        <Card.Body>
          <VStack align={{ base: "center", md: "flex-start" }} spacing={{ base: 2, md: 4, lg: 3 }}>
            <HStack spacing={3}> {/* Adds space between text and icons */}
              <Heading size={{ base: "md", md: "lg", lg: "xl" }} textAlign={{ base: "center", md: "left" }}>
                {props.name}
              </Heading>
              <Spacer />

              {/* GitHub Repo Link */}
              {props.repo && (
                <NavLink to={props.repo} target="_blank">
                  <Icon as={FaGithub} boxSize={5} _hover={{ color: "blue.400" }} />
                </NavLink>
              )}

              {/* Project Link */}
              {props.projectlink && (
              <NavLink to={props.projectlink} target="_blank">
                <Icon as={IoMdLink} boxSize={5} _hover={{ color: "blue.400" }} />
              </NavLink>
              )}
              
            </HStack>

            <Text
              color="gray.400"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign={{ base: "center", md: "left", lg: "left" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {props.description}
            </Text>
            <Text fontWeight="bold" color="teal.600" textAlign="left" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              <Flex wrap="wrap" gap={2} mt={2}>
                {props.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      bg="gray.700"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontSize={{ base: "8px", md: "10px", lg: "14px" }}
                    >
                      {tech}
                    </Box>
                  </motion.div>
                ))}
              </Flex>
            </Text>
          </VStack>
        </Card.Body>
      </HStack>
    </MotionCard>
  );
};

export default ProjectCard;
