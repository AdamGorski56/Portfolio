import React from "react";
import { motion } from "framer-motion";
import animationTwo from "../animations/animationSlide";
import transition from "../animations/transition";
import "../styles/WhoIAm.scss";

const WhoIAm = () => {
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={animationTwo}
      transition={transition}
      className='who_i_am'
    >
      <div className='who_i_am__container'>
        <div className='who_i_am__message_container'>
          <div className='who_i_am__message_welcome'>Hello!</div>
          <div className='who_i_am__message_text'>
            <h1>
              My name is Adam Gorski <i class='fa fa-yin-yang'></i>
            </h1>
            <h2>
              A front-end developer based in Bydgoszcz, PL. My passion is
              creating websites and programming in general. Coding has become my
              love.
            </h2>
          </div>
        </div>
        <div className='who_i_am__facts_container'>
          <div className='who_i_am__facts_signs'>
            <span id='sign1'>?</span>
            <span id='sign2'>?</span>
            <span id='sign3'>?</span>
          </div>
          <div className='who_i_am__facts_content'>
            <h3>3 random facts about me</h3>
            <ul>
              <span>I.&nbsp;&nbsp; </span>
              <li>
                Absolutely adore doing many kinds of sports, which helps me keep
                my body and mind in good condition{" "}
              </li>
              <span>II.&nbsp; </span>
              <li>
                {" "}
                Positive person who thinks everything is possible and a huge fan
                of reading books
              </li>
              <span>III.&nbsp;</span>{" "}
              <li>
                I'm interested in worlds food and I enjoy making others happy by
                preparing specials for them
              </li>
            </ul>
          </div>
        </div>
        <div className='who_i_am__regards'>
          <p>Nice to meet You!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhoIAm;
