import React from "react";
import { Box, VStack, Text, Icon, SimpleGrid, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaDocker } from "react-icons/fa";
import { SiPython, SiFastapi, SiPydantic  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi } from "react-icons/tb";


// Motion wrapper for smooth animation
const MotionBox = motion.create(Box);

const techs = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "APIs", icon: TbApi, color: "#E34F26" },
  { name: "Pydantic", icon: SiPydantic, color: "#ffcc00" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Database", icon: FaDatabase, color: "#4DB33D" },
  { name: "Postgres", icon: BiLogoPostgresql , color: "#336791" }
];

const TechStack = () => {
  return (
    <Box
      w="100%"
      py={10}
      px={{ base: "20%", md: "30%", lg: "30%" }}
      bgGradient="linear(to-r, gray.900, gray.800)"
      color="white"
      textAlign="center"
      mb={12}
      mt={12}
    >
      <Text fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }} mb={5}>
        Technologies
      </Text>

      <SimpleGrid
        columns={{ base: 5, md: 5, lg: 5 }}
        spacing={1} // Reduced spacing between icons
        justifyItems="center"
      >
        {techs.map((tech, index) => (
          <VStack key={index} spacing={2}>
            <MotionBox
              p={3}
              borderRadius="full"
              whileHover={{ scale: 1.1 }} // Fix: Move hover animation here
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.9,
              }}
            >
              <Icon as={tech.icon} boxSize={{ base: 7, md: 5, lg: 8 }} color={tech.color} />
            </MotionBox>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechStack;
