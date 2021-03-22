import React from 'react'
import react from '../assets/icons/react.svg'
import Bar from './Bar';
import python from '../assets/icons/python.svg'
import { motion } from 'framer-motion'

const languages = [
    {
      icon:python,
      name: "JavaScript",
      level: "80"
    },
    {
        icon:react,
        name: "Material-UI",
        level: "75"
      },
      {
        icon:react,
        name: "React",
        level: "80"
      },
      {
        icon:react,
        name: "React|Redux",
        level: "75"
      },
      {
        icon:react,
        name: "React|Nextjs",
        level: "65"
      },
      {
        icon:react,
        name: "Nodejs",
        level: "75"
      }, 
      {
        icon:react,
        name: "Express",
        level: "70"
      }
]

const tools = [
    {
        icon:react,
        name: "Figma",
        level: "85"
      },
      {
          icon:react,
          name: "Photoshop",
          level: "45"
        },
        {
          icon:react,
          name: "Illustrator",
          level: "60"
        },
        {
            icon:react,
            name: "Framer",
            level: "80"
          },
        {
            icon:react,
            name: "Bootstrap",
            level: "60"
          }
]

 const Resume = () => {  

    const resume_variants = {
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
     <motion.div className="container resume"
          variants={resume_variants}
          initial="hidden"
          animate="visible"
          exit="exit"
       
     >
        <div className="row">
           <div className="col-lg-6 resume-card">
               <h4 className="resume-card__heading">
                   Education
               </h4>
               <div className="resume-card__body">
                  <h5 className="resume-card__title">
                      Computer Science
                  </h5>
                  <p className="resume-card__name">
                      Bamenda international University (2013-2017)
                  </p>
                  <p className="resume-card__details">Completed B.tech in Computer Science Engineering from Bamenda internatonal Universty </p>
               </div>
          </div> 
          <div className="col-lg-6 resume-card">
               <h4 className="resume-card__heading">
                   Experience
               </h4>
               <div className="resume-card__body">
                  <h5 className="resume-card__title">
                       Areas of Forcust
                  </h5>
                  <p className="resume-card__name">                     
                      Javascript Programmer
                  </p>
                  <p className="resume-card__details">Test suitability of Web App build with the Javascript tech </p>
               </div>
          </div> 
        </div>

        <div className="row">
         <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
                Language and Framwork
            </h5>
            <div className="resume-language__body mt-3">
               {
                  languages.map(language => 
                      <Bar value={language} />
                    )
               }
            </div>
        </div>
        <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
                Tools
            </h5>
            <div className="resume-language__body mt-3">
               {
                  tools.map(tool => <Bar value={tool} />)
               }
            </div>
        </div>
       </div> 
     </motion.div>
    )
}

export default Resume
