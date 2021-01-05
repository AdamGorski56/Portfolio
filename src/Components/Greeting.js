import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Greeting.scss'
import { NavLink } from 'react-router-dom';
const Greeting = () => {
    return (
        <>
            <div className="greeting">
                <motion.h1 whileHover={{ scale: 0.99, x: 20, transition: { type: 'string', stiffness: 90000 } }}>Hello! I'm <span >Adam</span></motion.h1>
                <motion.h2 whileHover={{ scale: 0.97, x: -20, transition: { type: 'string', stiffness: 90000 } }}>Front-end web developer</motion.h2>
                <NavLink to="/aboutme/skills"> <button className="greeting__btnOutline">Find out more about me<i class="fas fa-arrow-up"></i></button></NavLink>
            </div >
        </>
    );
}

export default Greeting;