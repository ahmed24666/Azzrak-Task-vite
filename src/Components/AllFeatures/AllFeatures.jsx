import React from 'react'
import './allFeatures.scss'
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const AllFeatures = ({aboutRef}) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <motion.div ref={aboutRef}
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
    className='AllFeatures'>
      <motion.p
       ref={ref}
       initial="hidden"
       animate={inView ? 'visible' : 'hidden'} 
       variants={variants}
       transition={{ duration: 0.5,delay:0.3 }}
      >
        <span>• Integrated with all website’s builder</span>
        allowing merchants to manage their store and app from one app.
      </motion.p>
      <motion.p
      ref={ref2}
      initial="hidden"
      animate={inView2 ? 'visible' : 'hidden'} 
      variants={variants}
      transition={{ duration: 0.5,delay:0.3 }}
      >
        <span className='left'>• Customer Reviews</span>
        Our app allows merchants to easily collect and display customer reviews, increasing trust and social proof for their store.
      </motion.p>
      <motion.p
      ref={ref3}
      initial="hidden"
      animate={inView3 ? 'visible' : 'hidden'} 
      variants={variants}
      transition={{ duration: 0.5,delay:0.3 }}
      >
        <span>• All – in – one</span>
        you can find all apps in one place without searching too much.
      </motion.p>
    </motion.div>
  )
}

export default AllFeatures