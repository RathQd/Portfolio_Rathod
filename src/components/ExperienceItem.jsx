import React from 'react'
import { Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
    TimelineItem,
    TimelineConnector,
    TimelineContent,
    TimelineTitle,
    TimelineDescription,
} from "@/components/ui/timeline";

// Motion Wrapper
const MotionTimelineItem = motion.create(TimelineItem);
const MotionTimelineContent = motion.create(TimelineContent);

const ExperienceItem = (props) => {
  return (
    <MotionTimelineItem
      initial={{ opacity: 0, y: 50 }} // Start hidden and below
      animate={{ opacity: 1, y: 0 }} // Move to normal position
      transition={{ duration: 0.4, ease: "easeIn" }}
      whileHover={{ scale: 1.02 }} // Slight zoom on hover
    >
      {/* <TimelineConnector borderColor="blue.500" backgroundColor="white" variant="solid"  /> */}
      <TimelineConnector colorPalette="accent"   />
  
      <MotionTimelineContent
        initial={{ opacity: 0, x: -20 }} // Slide in from the left
        animate={{ opacity: 1, x: 0 }} // Move to normal position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <TimelineTitle 
          ml={{ base: 2, md: 4, lg: 5 }} 
          mb={2}
          fontSize={{ base: "16px", md: "18px", lg: "20px" }} 
          fontWeight= 'semibold'
        >
          {props.role}
        </TimelineTitle>
  
        <TimelineDescription 
          ml={{ base: 2, md: 4, lg: 5 }} 
          fontSize={{ base: "12px", md: "14px", lg: "16px" }} 
          color="gray.200"
          flex="1"
          alignItems="flex-end"
        >
          {props.company} {props.year}
        </TimelineDescription>
  
        <Text 
          textStyle="sm" 
          ml={{ base: 2, md: 4, lg: 5 }} 
          color="gray.400" 
          fontSize={{ base: "12px", md: "12px", lg: "15px" }} 
          mt={{ base: 1, md: 2 }}
          lineHeight={{ base: "short", md: "base", lg: "tall" }}
        >
          {props.desc}
        </Text>
      </MotionTimelineContent>
    </MotionTimelineItem>
  )
}

export default ExperienceItem;
