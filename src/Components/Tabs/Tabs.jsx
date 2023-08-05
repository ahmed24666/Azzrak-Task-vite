import './tabs.scss'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import AllFeatures from './../AllFeatures/AllFeatures'
import Sec2 from '../Sec2/Sec2';


const Tabs = ({aboutRef}) => {
  
  let tabs = [
    { id: "about", label: "About us", p: 'Our all-in-one app is designed to help merchants increase sales and improve the customer experience on their online stores. With a range of features and integrations,our app provides a user-friendly solution for businesses of all sizes.', component: <AllFeatures aboutRef={aboutRef} /> },
    { id: "aio", label: "All in one", p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veniam atque tenetur nam, sapiente earum aspernatur eius quae, cumque totam expedita nostrum debitis enim suscipit!', component: <Sec2 aboutRef={aboutRef}/> },
    { id: "partners", label: "Our partners", p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at voluptatem maiores facilis velit ad quod animi. Ab iste, voluptate enim ducimus doloribus recusandae esse optio? Minus eveniet fugit, laboriosam sequi voluptates, ullam reprehenderit autem facilis iure natus porro. Ea officiis nulla veritatis illo labore rem assumenda obcaecati quam itaque?', component: <AllFeatures aboutRef={aboutRef}/> },
    { id: "contact", label: "contact us", p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere alias nam totam accusamus atque voluptates sunt dolores voluptatem, itaque ullam vitae?', component: <Sec2 aboutRef={aboutRef}/>},
  ];
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div
    className="TabsCon">
      <div className="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "active" : ""}`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="motionSpan"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
        <div className="line">
        </div>
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
      {tabs.map((item) => {
        return (
          item.id === activeTab && (
            <div key={item.id}>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
              >{item.p}</motion.p>
              {item.component}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Tabs