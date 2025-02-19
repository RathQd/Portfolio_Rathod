import React from "react";
import { Box, Flex, Text, Separator} from "@chakra-ui/react";
import {
  TimelineItem,
  TimelineRoot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import { LuBriefcase, LuCode, LuGraduationCap } from "react-icons/lu";
import ExperienceItem from "./ExperienceItem";

const ExperienceTimeline = () => {
    const techProject1 = ["Python ", "REST APIs ", "FastAPI "];
    const techProject2 = ["Python ", "REST APIs ", "FastAPI "];
    const techProject3 = ["Python ", "REST APIs ", "FastAPI "];
    const techProject4 = ["Python ", "REST APIs ", "FastAPI "];
  return (
    <Box
      w="100%"
      py={{ base: 10, md: 20 }}
      px={{ base: "5%", md: "10%", lg: "15%" }}
      color="white"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        mb={{ base: 8, md: 10, lg: 12 }}
        textAlign="center"
      >
        Professional Journey
      </Text>

      <Flex justify="center" align="center" w="100%">
        <TimelineRoot size="lg" maxW="500px" variant={'solid'} key={'solid'}>
        <ExperienceItem 
            role="Digital Specialist Engineer" 
            company="Infosys |" 
            year="2022 - Present" 
            desc="Developing REST APIs and automating data workflows using the Python stack and cloud technologies."
            />
        <ExperienceItem 
            role="M.Tech CSE Research Student" 
            company="Indian Institute Of Information Technology" 
            year="" 
            desc="Developed expertise in AI, ML, and data analytics. Gained hands-on experience with big data technologies and statistical analysis for solving real-world problems."
            />
        <ExperienceItem 
            role="B.E CSE" 
            company="Government Engineering College" 
            year="" 
            desc="Gained a strong foundation in software development, data structures, and algorithms. Learned about databases, networking, and worked on real-world projects."
            />
        
        </TimelineRoot>
      </Flex>
    </Box>
  );
};

export default ExperienceTimeline;
