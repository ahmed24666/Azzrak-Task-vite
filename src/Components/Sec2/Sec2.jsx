import React from 'react'
import './sec.scss'
import { motion} from "framer-motion";

const Sec2 = ({aboutRef}) => {
    return (
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
        className='Sec2'>
            <div className="head gradient-text">
                <h1 className='gradient-text'>App Features :</h1>
            </div>
            <div className="items">
                <div className="item">
                    <div className="num gradient-text">
                        <div className="span">1</div>
                    </div>
                    <div className="text">
                        <div className="top">
                        • Integrated with all website’s builder
                        </div>
                        <div className="bottom">allowing merchants to manage their store and app from one app.</div>
                    </div>
                </div>
                <div className="item">
                    <div className="num gradient-text">
                        <div className="span">2</div>
                    </div>
                    <div className="text">
                        <div className="top">
                        • Customer Reviews
                        </div>
                        <div className="bottom">Our app allows merchants to easily collect and display customer </div>
                    </div>
                </div>
                <div className="item">
                    <div className="num gradient-text">
                        <div className="span">3</div>
                    </div>
                    <div className="text">
                        <div className="top">
                        • All – in – one
                        </div>
                        <div className="bottom">you can find all apps in one place without searching too much.</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sec2