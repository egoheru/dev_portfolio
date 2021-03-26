import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'
import eg from '../assets/eg.png'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOffIcon from '@material-ui/icons/LocationOff';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codewithego@gmail.com")
    }
    
    const sidebar_variant = {
        hidden: {
            x: '-20vw',
      
        },
        visible: {
            x: 0,
  
            transition: {
                delay: 0.1, duration:0.5, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate= 'visible'

        >
            {/* <img src={mightycoder} alt="avatar" className="sidebar__avatar" /> */}
            <img src={eg} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Blasius <span>Ego</span> </div>
            <div className="sidebar__item sidebar__title">Fullstack Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Get Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                {/* <a href="https://twitter.com/codewithego" target="_blank" ><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/codewithego/" target="_blank" ><img src={instagram} alt="instagram" className="sidebar__icon" /></a> */}
                <a href="https://www.linkedin.com/in/codewithego/" target="_blank" ><LinkedInIcon className="sidebar__icon mr-3" /> </a>
                <a href="https://twitter.com/codewithego" target="_blank" ><TwitterIcon/> </a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    {/* <a href="https://github.com/egoheru/"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a> */}
                    <a href="https://github.com/egoheru/" target="_blank" ><GitHubIcon className="sidebar__icon-github mr-3" /> github</a>
                </div>
                <div className="sidebar__location">
                    {/* <img src={pin} alt="location" className="sidebar__icon mr-3" /> */}
                    <LocationOffIcon className="sidebar__icon-location mr-3" />
                    Douala, Cameroon</div>
                    <div>street 5 nylon</div>
                <div className="sidebar__item">codewithego@gmail.com</div>
                <div className="sidebar__item">Whatsapp : +237 670390709 </div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;