import React from 'react';
import { motion } from 'framer-motion';
import animationTwo from '../animations/animationSlide'
import transition from '../animations/transition'
import '../styles/WhoIAm.scss'

const WhoIAm = () => {
    return (
        <motion.div exit="out" animate="in" initial="initial" variants={animationTwo} transition={transition} className="who_i_am">

            <div className="who_i_am__container">

                <h1>My name is Adam Gorski <i class="fa fa-smile"></i></h1>
                <h2>a front-end developer based in Folkestone, Kent, UK. My passion is creating websites
                 and programming in general. Coding has become my love!</h2>

                <p>That feeling when your code is working fine ... beautiful!
                </p>
                <h3>3 random facts about me</h3>
                <ul>
                    <li><span>I. &nbsp;&nbsp;</span>I like sports, which helps me keep my body and mind in good shape </li>
                    <li><span>II. &nbsp;</span> I am a positive person who thinks anything is possible and enjoy reading books</li>
                    <li><span>III.&nbsp;</span>I love eating delicious food and making others happy by cooking for them</li>
                </ul>
                <p>Nice to meet You!</p>
            </div>
        </motion.div>
    );
}

export default WhoIAm;