import React from 'react';

import '../styles/MyWork.scss'

import hungryPhoto from '../images&videos/hungryPhoto.jpg';
import tennisPhoto from '../images&videos/tennisPhoto.jpg'

import Matrix from '../images&videos/matrix3.mp4'

import animationOne from '../animations/animation'
import transition from '../animations/transition'

import { motion } from 'framer-motion';

const MyWork = () => {
    return (
        <>

            <motion.div exit="out" animate="in" initial="out" variants={animationOne} transition={transition} className="my_work">
                <video autoPlay loop muted cover>
                    <source src={Matrix} type="video/mp4" />
                </video>
                <h1>My work </h1>
                <div className="my_work__container">
                    <div className="my_work__project_one">
                        <div className="my_work__description">

                            <h2>It is the website of an imaginary
                                 restaurant where you can find all the information you need about this place
                        </h2>
                            <a href="https://github.com/AdamGorski56/goHungryPeople" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)", }}>Source Code</motion.button></a>
                        </div>
                        <div className="my_work__image">
                            <a href="https://adamgorski56.github.io/goHungryPeople/" target="_blank" rel="noreferrer"><img src={hungryPhoto} alt="project" /></a>
                        </div>

                    </div>
                    <div className="my_work__project_two">
                        <div className="my_work__description">
                            <h2>It is an app that I created for me and for the needs of my friend.
                                 The app shows the current weather conditions and will tell you if there is a good time
                                  to play tennis in the given city.
                            </h2>
                            <a href="https://github.com/AdamGorski56/TennisWeatherApp/tree/master" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)", }}>Source Code</motion.button></a>
                        </div>
                        <div className="my_work__image">
                            <a href="https://adamgorski56.github.io/TennisWeatherApp/" target="_blank" rel="noreferrer"><img src={tennisPhoto} alt="project" /></a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}


export default MyWork