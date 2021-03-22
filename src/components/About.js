import React from 'react'
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import computer from '../assets/icons/computer.svg'
import puzzle from '../assets/icons/puzzle.svg'
import js from '../assets/icons/js.svg'
import pin from '../assets/icons/pin.svg'
import repair from '../assets/icons/repair.svg'
import Skillcard from './Skillcard';
import {motion} from 'framer-motion'

const skills = [
    {
       icon:api,
       title:"Web Designer RoyalMotion",
       about:"in 2016 Consulted with Product Manager to identify minimal viable product and decomposed feature set into small scoped user stories"
    },
    {
        icon:computer,
        title:"Project COORDINATOR REAL-STATE",
        about:"Managing leading team of intense coordination with manfacturing plant in my local erea, Built a mock customer service web app for a Scholar project."
     },
     {
        icon:puzzle,
        title:"Full-Stack Dev EAGLE TAG",
        about:"Oversaw design and upgrades development, enable testing methods of prototypes to be used in development. Built modern applications with the MERN"
     },
     {
        icon:js,
        title:"Redux Developer PARA-TECH",
        about:"Ensured the uninterrupted flow of business-critical operations. On-time error analysis reduced downtime by 15% and costs of warranty by up to 25%"
     },
     {
        icon:pin,
        title:"Mern Stack dev TECH EGO",
        about:"Intergreted support system, understandng of existing architecture and works on minor bugs, use of API Request between the client and the server"
     },
     {
        icon:repair,
        title:"React Frontend dev STRIX",
        about:"built a beautiful and scalable SPA using Material-UI, Nextjs and React.js, intergreted support system, identify minimal viable product features"
     }
]

const About = () => {

   const about_variants = {
      hidden: {
          opacity: 0
        },
        visible: {
              opacity: 1,
              transition: {
                 delay: 0.2,duration:0.6
             }
        },
        exit: {
         opacity: 0,
         transition: {
           ease: 'easeInOut'
         }
     }
   }

    return (
        <motion.div className="about"
          variants={about_variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        
        >
           <h6 className="about__intro">
           Computer Engineer in experience, a creative Developer participating in complete project development lifecycle of successfully launched applications. Seeking to use proven skills in JavaScript and Project Management to meet business needs !!!!
           </h6>
           <div className="container about__container">
               <h6 className="about__heading">Experience</h6>
               <div className="row">
                   {
                     skills.map(skill => 
                       <Skillcard skill={skill} />   
                     )
                   }
               </div>
           </div>
        </motion.div>
    );
};

export default About;
