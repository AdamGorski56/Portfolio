import React from 'react';
import { motion } from 'framer-motion';

import html from "../images&videos/htmlimg.png"
import css from "../images&videos/cssimg.png"
import react from "../images&videos/reactimg.png"
import sass from "../images&videos/sassimg.png"
import js from "../images&videos/jsimg.png"
import webpack from "../images&videos/webpackimg.jpg"
import git from "../images&videos/gitimg.png"

import '../styles/Skills.scss'

import animationTwo from '../animations/animationSlide'
import transition from '../animations/transition'

const Skills = () => {

    return (
        <motion.div exit="out" animate="in" initial="initial" variants={animationTwo} transition={transition} className="skills">
            <div className="skills__container">
                <h1> My skills</h1>

                <h2>Front end</h2>
                <div className="skills__images">
                    <ul>
                        <li><img src={html} alt="html" /> </li>
                        <li><img src={css} alt="css" /></li>
                        <li><img src={sass} alt="sass" /></li>
                        <li><img src={js} alt="java script" /></li>
                        <li><img src={react} alt="react" /></li>
                    </ul>
                </div>
                <h2>General</h2>
                <div className="skills__images">
                    <ul>
                        <li><img src={webpack} alt="webpack" /></li>
                        <li><img src={git} alt="git" /></li>
                    </ul>
                </div>
                <p>I enjoy to solve problems. If I don’t know how to do something I am looking for a solution on
                 Stack Overflow, Google or docs. I have very good communication skills.
                  I am aware of the fact that soft skills are very important in everyday developer’s life.
                        I have basic understanding of Scrum and Agile methodologies.</p>
                <p>I'm constantly learning and improving my skills. It's FUN!</p>

            </div>
        </motion.div>
    );
}

export default Skills;