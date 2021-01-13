import React from 'react';
import { motion } from 'framer-motion';

import '../styles/Contact.scss'

import animationOne from '../animations/animation'
import transition from '../animations/transition'

import Matrix from '../images&videos/matrix3.mp4'



const Contact = () => {
    return (
        <motion.div exit="out" animate="in" initial="out" variants={animationOne} transition={transition} className="contact">
            <video autoPlay loop muted cover>
                <source src={Matrix} type="video/mp4" />
            </video>

            <div className="contact__header">
                <h1>Stay in touch!</h1>

            </div>
            <div className="contact__body">

                <div className="contact__info_container">
                    <h2>Feel free to contact me</h2>
                    <div className="contact__info_content_container">

                        <span className="contact__email"><i class="fa fa-envelope-open"></i>adamgorski1256@gmail.com</span>
                        <span className="contact__phone"><i class="fa fa-phone"></i>+44 78 2710 88 35</span>
                        <span className="contact__social_media"> <a href="https://www.linkedin.com/in/adam-gorski-a58b05202/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a><a href="https://github.com/AdamGorski56/" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></span>

                        <a href="mailto:adamgorski1256@gmail.com"><motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)", }} className="contact__email_btn">Send Email</motion.button></a>
                    </div>
                </div>


            </div>

        </motion.div >
    );
}

export default Contact;