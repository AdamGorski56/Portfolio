import React from "react";

import "../styles/MyWork.scss";

import ProjectsSlider from "../Components/projectsSlider.js";

import Matrix from "../images&videos/matrix3.mp4";

import animationOne from "../animations/animation";
import transition from "../animations/transition";

import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <>
      <motion.div
        exit='out'
        animate='in'
        initial='out'
        variants={animationOne}
        transition={transition}
        className='my_work'
      >
        <video autoPlay loop muted cover preload='none'>
          <source src={Matrix} type='video/mp4' />
        </video>

        <h1>My work </h1>
        <div className='my_work__container'>
          <ProjectsSlider />
        </div>
      </motion.div>
    </>
  );
};

export default MyWork;
