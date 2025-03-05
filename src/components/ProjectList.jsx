import React from 'react'
import ProjectCard from './ProjectCard'
import {Text, Flex} from "@chakra-ui/react";

const ProjectList = () => {
    const techProject1 = ["Java", "React ", "Maven ", " Docker", " Jenkins"];
    const techProject2 = ["tech ", "tech ", "tech", "tech "];
    const techProject3 = ["Java ", "Js", "Saas"];
    const techProject4 = ["C"];
  return (
    <>
     <Text 
        textAlign="center"
        color="white"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
        mb={5} >
            Projects </Text>
            <Flex
      direction={{ base: 'column', md: 'row' }} // Stack on mobile, row on medium screens and up
      justify="center" // Center both cards on large screens
      align="center"
      gap={{ base: 4, md: 6 }} // Space between cards
      wrap="wrap" // Allows wrapping on smaller screens
      mb ={6}
      mt ={12}
    >
    <ProjectCard 
        name="Old Age Home Management System" 
        description = "A user-friendly web application for streamlining operations within an old age home and integrating it with essential services like hospitals, cabs, and NGOs for seamless functionality" 
        technologies = {techProject1}
        projectlink = ""
        repo= ""/>
    <ProjectCard 
        name="DiscoveRead" 
        description = "Web-App designed to find interesting articles on web." 
        technologies = {techProject3}
        projectlink = ""
        repo= "https://github.com/yagnik112358/DiscoveRead"/>
    <ProjectCard 
        name="Banking System" 
        description = "a small Mini-Project on user-friendly online banking system." 
        technologies = {techProject4}
        projectlink = ""
        repo= "https://github.com/yagnik112358/Banking-System"/>   
     </Flex>            
    </>
   

  )
}

export default ProjectList