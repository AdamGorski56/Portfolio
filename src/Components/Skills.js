import React from "react";
import { motion } from "framer-motion";

import html from "../images&videos/htmlimg.png";
import css from "../images&videos/cssimg.png";
import react from "../images&videos/reactimg.png";
import sass from "../images&videos/sassimg.png";
import js from "../images&videos/jsimg.png";
import webpack from "../images&videos/webpackimg.jpg";
import git from "../images&videos/gitimg.png";

import "../styles/Skills.scss";

import animationTwo from "../animations/animationSlide";
import transition from "../animations/transition";

const Skills = () => {
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={animationTwo}
      transition={transition}
      className='skills'
    >
      <h1> My skills</h1>
      <div className='skills__container'>
        <div className='skills__images_container'>
          <h2>Front end</h2>
          <div className='skills__images'>
            <ul>
              <li>
                <img src={html} alt='html' />{" "}
              </li>
              <li>
                <img src={css} alt='css' />
              </li>
              <li>
                <img src={sass} alt='sass' />
              </li>
              <li>
                <img src={js} alt='java script' />
              </li>
              <li>
                <img src={react} alt='react' />
              </li>
            </ul>
          </div>
          <h2>General</h2>
          <div className='skills__images'>
            <ul>
              <li>
                <img src={webpack} alt='webpack' />
              </li>
              <li>
                <img src={git} alt='git' />
              </li>
            </ul>
          </div>
        </div>
        <div className='skills__text_container'>
          <span>
            {" "}
            &emsp;&emsp;&emsp;In my work, I use HTML, CSS, (SCSS) which are
            absolutely essential. I also have a strong foundation in JavaScript
            and React, in which I can write not too complicated applications.
            All my projects are responsive in order to be user-friendly.
          </span>

          <span>
            &emsp;&emsp;&emsp;I am very motivated and enjoy to solve problems.
            If I don’t know how to do something I am looking for a solution on
            Stack Overflow, Google or docs. I have good communication skills. I
            am aware of the fact that soft skills are very important in everyday
            developer’s life. I have basic understanding of Scrum and Agile
            methodologies.
          </span>

          <span>I'm constantly learning and improving my skills. </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
