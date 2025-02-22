import React from 'react'
import ProjectCard from './ProjectCard'
import {Text, Flex} from "@chakra-ui/react";

const ProjectList = () => {
    const techProject1 = ["React ", "ChakraUI ", "Docker "];
    const techProject2 = ["React ", "Json-Server ", "ChakraUI", "Docker "];
    const techProject3 = ["FastAPI ", "Pydantic", "Docker", "Postgress"];
    const techProject4 = ["Android", "MLkit"];
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
        name="Portfolio" 
        description = "Built a React and Chakra UI portfolio to showcase experience, skills, projects, and contact details with a responsive design." 
        technologies = {techProject1}
        projectlink = "https://dharmrajrathod6.onrender.com/"
        repo= "https://github.com/RathQd/Portfolio_Rathod"/>
    <ProjectCard 
        name="JobGlu" 
        description = "Designed and implemented a job portal with React and JSON-Server, enabling job management. Dockerized for seamless deployment." 
        technologies = {techProject2}
        projectlink = "https://jobglu.onrender.com/"
        repo= "https://github.com/RathQd/JobGlu"/>
    <ProjectCard 
        name="Social Media Backend" 
        description = "Developed a FastAPI-based social media backend with JWT auth, Pydantic validation, Alembic migrations, CI/CD via GitHub Actions, and Dockerized deployment." 
        technologies = {techProject3}
        projectlink = ""
        repo= "https://github.com/RathQd/python_fastapi/tree/dev_fastapi"/>
    <ProjectCard 
        name="Goods Warehose ADP" 
        description = "Goods Warehouse ADP connects warehouses, vendors, and third-party apps for instant 2-3 hour delivery, leveraging AI, ML, and cloud for automated data processing." 
        technologies = {techProject4}
        projectlink = "https://gwadp-2c6dd.web.app/"
        repo= ""/>         
          
        
     </Flex>            
    </>
   

  )
}

export default ProjectList