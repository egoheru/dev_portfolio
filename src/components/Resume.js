import React from 'react'
import react from '../assets/icons/react.svg'
import Bar from './Bar';
import python from '../assets/icons/python.svg'
import { motion } from 'framer-motion'

const languages = [
    {
      icon:python,
      name: "Python",
      level: "45"
    },
    {
        icon:react,
        name: "Java",
        level: "60"
      },
      {
        icon:react,
        name: "HTML",
        level: "80"
      },
      {
        icon:react,
        name: "react",
        level: "60"
      },
      {
        icon:react,
        name: "Django",
        level: "80"
      },
      {
        icon:react,
        name: "Bootstrap",
        level: "80"
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
            name: "Jama",
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
                      Computer Science Engineering
                  </h5>
                  <p className="resume-card__name">
                      Academy of Technology(2017-2021)
                  </p>
                  <p className="resume-card__details">Loremm fghjk dfghjkl dfghj fghjk dfghjk drtyu b rtyuiy rtyuiohyhjkk </p>
               </div>
          </div> 
          <div className="col-lg-6 resume-card">
               <h4 className="resume-card__heading">
                   Experience
               </h4>
               <div className="resume-card__body">
                  <h5 className="resume-card__title">
                      Intern
                  </h5>
                  <p className="resume-card__name">
                      TCS (2020)
                  </p>
                  <p className="resume-card__details">Loremm fghjk dfghjkl dfghj fghjk dfghjk drtyu b rtyuiy rtyuiohyhjkk </p>
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
                Tools and softwares
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