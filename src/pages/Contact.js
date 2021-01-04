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
                    <div className="contact__info_header">
                        <h2>Contact</h2>
                    </div>
                    <div className="contact__info_content_container">
                        <span className="contact__email"><i class="fa fa-envelope-open"></i>adamgorski1256@gmail.com</span>
                        <span className="contact__phone"><i class="fa fa-phone"></i>+44 2710 88 35</span>
                        <span className="contact__social_media"><i class="fab fa-linkedin"></i><i class="fab fa-github"></i></span>
                    </div>
                </div>
                <div className="contact__message_container">
                    <p>Feel free to contact me</p>
                    <a href="mailto:adamgorski1256@gmail.com"><button className="contact__email_btn">Send Email</button></a>
                </div>

            </div>

        </motion.div >
    );
}

export default Contact;