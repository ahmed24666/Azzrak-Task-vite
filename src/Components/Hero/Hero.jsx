import React from 'react'
import './hero.scss'
import { BsArrowRight } from 'react-icons/bs';
import { BsMouse } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = ({aboutRef}) => {
  const AllFeatures = document.getElementById("scrollto");
  const handleClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='Hero'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0 }}
      >ALL IN ONE</motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "backInOut", delay: 0 }}
      >
        <span>
          plugins
        </span>
        upsell sales
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2, ease: "backInOut", delay: 0 }}
      >
        we develop
        <span>
          plugins
        </span>
        .
      </motion.h2>
      <div className="icons">
        <motion.img
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2.2, ease: "backInOut", delay: 0 }}
          src="/images/google.png" alt="" />
        <motion.img
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2.3, ease: "backInOut", delay: 0 }}
          src="/images/Facebook.png" alt="" />
        <motion.img
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2.3, ease: "backInOut", delay: 0 }}
          src="/images/whatsapp.png" alt="" />
        <motion.img
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2.4, ease: "backInOut", delay: 0 }}
          src="/images/LinkedIn.png" alt="" />
      </div>
      <motion.div whileTap={{opacity:'0.7',}}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2.6, ease: "backInOut", delay: 0 }}
      className="btn">
        <span className='gradient-text'>
          START NOW
          <div className="arrow ">
            <BsArrowRight />
          </div>
        </span>
      </motion.div>
      <div className="scroll">
        <div className="bounce mouse" onClick={()=>handleClick()}>
        <BsMouse/>
        </div>
        <p>Explore More</p>
      </div>
    </div>
  )
}

export default Hero