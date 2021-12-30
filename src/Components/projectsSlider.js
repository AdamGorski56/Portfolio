import React, { Component } from "react";
import Slider from "react-slick";

import portfolioPhoto from "../images&videos/portfolioPhoto.jpg";
import hungryPhoto from "../images&videos/hungryPhoto.jpg";
import tennisPhoto from "../images&videos/tennisPhoto.jpg";
import giftShopPhoto from "../images&videos/giftShopPhoto.jpg";

import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProjectsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className='my_work__slide_wrapper'>
          <div className='my_work__project my_work__project_one'>
            <div className='my_work__description'>
              <h2>
                My portfolio website telling a little bit about me. I built the
                page using the react library.
              </h2>
              <a
                href='https://github.com/AdamGorski56/Portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)",
                  }}
                >
                  Source Code
                </motion.button>
              </a>
            </div>
            <div className='my_work__image'>
              <a
                href='https://www.adamgorski.dev'
                target='_blank'
                rel='noreferrer'
              >
                <img src={portfolioPhoto} alt='project' />
              </a>
            </div>
          </div>
          <div className='my_work__project my_work__project_two'>
            <div className='my_work__description'>
              <h2>
                It is an app that I created for my friend's request. The app
                shows the current weather conditions and will tell you if there
                is a good time to play tennis in the given city.
              </h2>
              <a
                href='https://github.com/AdamGorski56/TennisWeatherApp/tree/master'
                target='_blank'
                rel='noreferrer'
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)",
                  }}
                >
                  Source Code
                </motion.button>
              </a>
            </div>
            <div className='my_work__image'>
              <a
                href='https://adamgorski56.github.io/TennisWeatherApp/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={tennisPhoto} alt='project' />
              </a>
            </div>
          </div>
        </div>
        <div className='my_work__slide_wrapper'>
          <div className='my_work__project my_work__project_one'>
            <div className='my_work__description'>
              <h2>
                It is the website of an imaginary restaurant where you can find
                all the information you need about this place
              </h2>
              <a
                href='https://github.com/AdamGorski56/goHungryPeople'
                target='_blank'
                rel='noreferrer'
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)",
                  }}
                >
                  Source Code
                </motion.button>
              </a>
            </div>
            <div className='my_work__image'>
              <a
                href='https://adamgorski56.github.io/goHungryPeople/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={hungryPhoto} alt='project' />
              </a>
            </div>
          </div>
          <div className='my_work__project my_work__project_two'>
            <div className='my_work__description'>
              <h2>
                Website that is to be used to find a gift for the people you
                love. I used CSS and HTML to complete the project. JS was used
                by me to create a menu for lower resolutions.
              </h2>
              <a
                href='https://github.com/AdamGorski56/GiftShop'
                target='_blank'
                rel='noreferrer'
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px 0px rgb(3, 187, 3)",
                  }}
                >
                  Source Code
                </motion.button>
              </a>
            </div>
            <div className='my_work__image'>
              <a
                href='https://adamgorski56.github.io/GiftShop/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={giftShopPhoto} alt='project' />
              </a>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
