import React from "react";
import "../styles/AboutMe.scss";
import "../styles/AboutMeNavigation.scss";

import Matrix from "../images&videos/matrix3.mp4";

import AboutMeNavigation from "../Components/AboutMeNavigation";
import Skills from "../Components/Skills";
import WhoIAm from "../Components/WhoIAm";
import HireMe from "../Components/HireMe";

import animationOne from "../animations/animation";
import transition from "../animations/transition";

import { Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='out'
      variants={animationOne}
      transition={transition}
      className='about_me'
    >
      <AboutMeNavigation />
      <video autoPlay loop muted cover preload='none'>
        <source src={Matrix} type='video/mp4' />
      </video>
      <Switch>
        <Route path='/aboutme/skills' component={Skills} />
        <Route path='/aboutme/whoiam' component={WhoIAm} />
        <Route path='/aboutme/hireme' component={HireMe} />
      </Switch>
    </motion.div>
  );
};

export default AboutMe;
