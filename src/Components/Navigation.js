import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink to='/' exact={true} className='navigation__logo'>
        AG
      </NavLink>
      <ul className='navigation__links'>
        <NavLink to='/aboutme/skills' className='navigation__link'>
          <i class='fa fa-child'></i>
        </NavLink>
        <NavLink to='/mywork' className='navigation__link'>
          <i class='fa fa-keyboard'></i>
        </NavLink>
        <NavLink to='/contact' className='navigation__link'>
          <i class='fa fa-check'></i>
        </NavLink>
      </ul>
      <ul className='navigation__icons'>
        <a
          href='https://www.linkedin.com/in/adam-gorski-a58b05202/'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-linkedin'></i>
        </a>
        <a
          href='https://github.com/AdamGorski56/'
          target='_blank'
          rel='noreferrer'
        >
          <i class='fab fa-github'></i>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
