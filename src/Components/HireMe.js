import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import '../styles/HireMe.scss'

import animationTwo from '../animations/animationSlide'
import transition from '../animations/transition'

const HireMe = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={animationTwo} transition={transition} className="hire_me">
            <div className="hire_me__container">
                <h1> Hire Me <i class="fa fa-handshake"></i></h1>
                <p className="text">I'm currently seeking out the right team where I can work with other passionate individuals
                    to build digital products that positively impact people lives. I belive in always exceeding expectations
                    and continuosly learning to be the best at my craft.
                </p>


                <p className="message">I need this job!</p>

                <NavLink to="/contact"><motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)", }}

                    className="hire_me__contact_btn">Contact me</motion.button></NavLink>
            </div>
        </motion.div>
    );
}

export default HireMe;