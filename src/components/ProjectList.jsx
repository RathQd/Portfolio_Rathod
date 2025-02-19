import React from 'react'
import ProjectCard from './ProjectCard'
import {Text, Flex} from "@chakra-ui/react";

const ProjectList = () => {
    const techProject1 = ["Python ", "REST APIs ", "FastAPI "];
    const techProject2 = ["React ", "Json-Server ", "Docker "];
    const techProject3 = ["FastAPI ", "Pydantic", "Docker", "Postgress"];
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
        name="Python Project 1" 
        description = "The Smart Expense Tracker is a Python app that helps users manage finances by tracking income, expenses, and savings, with visualizations, budget tips, and category-wise analysis." 
        technologies = {techProject1}
        projectlink = ""
        repo= "https://github.com/RathQd/python_fastapi/tree/dev_fastapi"/>
    <ProjectCard 
        name="JobGlu - Jobs Without Limits" 
        description = "Designed and implemented a job portal with React and JSON-Server, enabling job management. Dockerized for seamless deployment." 
        technologies = {techProject2}
        projectlink = "https://jobglu.onrender.com/"
        repo= "https://github.com/RathQd/JobGlu"/>
    <ProjectCard 
        name="FastAPI Social Media Backend" 
        description = "Developed a FastAPI-based social media backend with JWT auth, Pydantic validation, Alembic migrations, CI/CD via GitHub Actions, and Dockerized deployment." 
        technologies = {techProject3}
        projectlink = "https://python-social-media-backend.onrender.com/"
        repo= "https://github.com/RathQd/python_fastapi/tree/dev_fastapi"/>
    <ProjectCard 
        name="Python Project 4" 
        description = "The Smart Expense Tracker is a Python app that helps users manage finances by tracking income, expenses, and savings, with visualizations, budget tips, and category-wise analysis." 
        technologies = {techProject1}
        projectlink = ""
        repo= "https://github.com/RathQd/python_fastapi/tree/dev_fastapi"/>         
        
     </Flex>            
    </>
   

  )
}

export default ProjectList