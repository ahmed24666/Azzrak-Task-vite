import React, { useState } from 'react'
import './nav.scss'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Nav = ({open, setopen}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "backInOut", delay: 0 }}
    className='Nav' style={open?{position:'fixed'}:{}}>
      <div className="left">
        <div className="image">
          <img src="/images/Logo.png" alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Plugins</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Packages</li>
        </ul>
      </div>
      <div className="right">
        <span className='gradient-text'>
          START NOW
        </span>
      </div>
      <div className="menu" onClick={() => setopen(!open)}>
        <HiOutlineMenuAlt3 />
      </div>
      
    </motion.div>
  )
}

export default Nav