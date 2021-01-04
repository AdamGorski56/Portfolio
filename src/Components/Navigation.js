import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.scss'

const Navigation = () => {
    return (


        <nav className="navigation">
            <NavLink to="/" exact={true} className="navigation__logo">AG</NavLink>
            <ul className="navigation__links">
                <NavLink to="/aboutme/skills" className="navigation__link"><i class="fa fa-child" ></i></NavLink>
                <NavLink to="/mywork" className="navigation__link"><i class="fa fa-keyboard"></i></NavLink>
                <NavLink to="/contact" className="navigation__link"><i class="fa fa-check"></i ></NavLink>
            </ul>
            <ul className="navigation__icons">
                <NavLink to=""><i class="fab fa-linkedin"></i></NavLink>
                <NavLink to=""><i class="fab fa-github"></i></NavLink>
            </ul>
        </nav>


    );
}

export default Navigation;