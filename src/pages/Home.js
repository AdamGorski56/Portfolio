import React from "react";

import Greeting from "../Components/Greeting";

import "../styles/Navigation.scss";
import "../styles/Home.scss";

import animationOne from "../animations/animation";
import transition from "../animations/transition";

import Matrix from "../images&videos/matrix3.mp4";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='out'
      variants={animationOne}
      transition={transition}
    >
      <video autoPlay loop muted cover preload='none'>
        <source src={Matrix} type='video/mp4' />
      </video>
      <div className='home_container'>
        <Greeting />
      </div>
    </motion.div>
  );
};

export default Home;
