import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact.js";

import Navigation from "./Components/Navigation";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact={true} component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/mywork' component={MyWork} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
