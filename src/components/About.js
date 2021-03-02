import React from 'react'
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import computer from '../assets/icons/computer.svg'
import Skillcard from './Skillcard';
import {motion} from 'framer-motion'

const skills = [
    {
       icon:api,
       title:"Lorem dfbg xbhc hfhh",
       about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
    },
    {
        icon:computer,
        title:"Lorem dfbg xbhc hfhh",
        about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
     },
     {
        icon:backend,
        title:"Lorem dfbg xbhc hfhh",
        about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
     },
     {
        icon:api,
        title:"Lorem dfbg xbhc hfhh",
        about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
     },
     {
        icon:api,
        title:"Lorem dfbg xbhc hfhh",
        about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
     },
     {
        icon:api,
        title:"Lorem dfbg xbhc hfhh",
        about:"Lorem fghgh fgh fgh fghj dfghjkfghjkghj fghjk xdfghjk xcfghjk"
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
               lorem dbfhev kxhdfh djvx dgxd hdvchxx hdx dhdchx gfdd
           </h6>
           <div className="container about__container">
               <h6 className="about__heading">What i offer</h6>
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
