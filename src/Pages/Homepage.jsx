import React from 'react'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import ProjectList from '@/components/ProjectList'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import GetInTouch from '@/components/GetInTouch'

const Homepage = () => {
  return (
    <>
     <div id="home"> <Hero /> </div>
     <div id="technologies"> <TechStack /> </div>   
     <div id="projects"> <ProjectList /> </div>   
     <div id="timeline"> <ExperienceTimeline /> </div>   
     <div id="get-in-touch"> <GetInTouch /> </div>      
    </>
    
  )
}

export default Homepage