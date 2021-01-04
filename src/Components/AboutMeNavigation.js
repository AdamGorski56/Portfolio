import React from 'react';
import { NavLink } from 'react-router-dom';


import '../styles/AboutMe.scss'


const AboutMeNavigation = () => {


    return (
        <div className="about_me_navigation__options">
            <ul>
                <NavLink to={`/aboutme/skills`} className={'about_me_navigation__option'}>Skills<div className="line"></div></NavLink>
                <NavLink to={`/aboutme/whoiam`} className={'about_me_navigation__option'}>Who I am<div className="line"></div></NavLink>
                <NavLink to={`/aboutme/hireme`} className={'about_me_navigation__option'}>Hire Me<div className="line"></div></NavLink>
            </ul>
        </div>
    );
}

export default AboutMeNavigation;