import React from 'react';
import '../styles/Greeting.scss'
import { NavLink } from 'react-router-dom';
const Greeting = () => {
    return (
        <>
            <div className="greeting">
                <h1>Hello! I'm <span>Adam</span></h1>
                <h2>Front-end web developer</h2>
                {/* <p>with a passion for solviung problems and learning new things.</p> */}
                <NavLink to="/aboutme/skills"> <button className="greeting__btnOutline">Find out more about me<i class="fas fa-arrow-up"></i></button></NavLink>
            </div >
        </>
    );
}

export default Greeting;