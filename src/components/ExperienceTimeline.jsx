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
        <TimelineRoot colorPalette="teal" size="lg" maxW="500px" variant={'solid'} key={'solid'}>
        <ExperienceItem colorPalette="teal" size="lg"
            role="Software Engineer" 
            company="PayU |" 
            year="2022 - Present" 
            desc="I contribute to the ACS team, enhancing authentication with Single Sign-On, EazyConnect for API integration, and the Authorization Engine. With expertise in backend, frontend, and transaction flows, I ensure seamless authentication solutions."
            />
        <ExperienceItem colorPalette="teal" size="lg"
            role="Research Intern" 
            company="HP |" 
            year="2022" 
            desc="Contributed to the Insights Lab by generating valuable insights from analyzed data for small and medium business printers."
            />    
        <ExperienceItem 
            role="M.Tech CSE" 
            company="International Institute of Information Technology Bangalore" 
            year="" 
            desc="Developed expertise in AI, ML, and data analytics. Gained hands-on experience solving real-world problems."
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
