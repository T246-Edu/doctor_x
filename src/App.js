import React from "react";
import { Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact1";
import logo from "./logo.png";
import Recruitment from "./Recruitment";
import "./App.css";

//Toggles nav menu visibility
const toggleNav = () =>
  document.querySelector("nav").classList.toggle("toggle-menu");

const App = () => (
  <div>
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      {/*Hamburger only visible on mobile*/}
      <a id="toggle-link" href="#" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
        </svg>
      </a>
    </header>
    <div id="wrapper">
      <nav className="toggle-menu">
        <ul>
          <NavLinkItem anchor="Home" path="/" />
          <NavLinkItem anchor="About Us" path="/about" />
          <NavLinkItem anchor="Contact" path="/contact" />
          <NavLinkItem anchor="recruitment" path="/recruitment" />
        </ul>
      </nav>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/contact" render={() => <Contact />} />
      <Route exact path="/recruitment" render={() => <Recruitment />} />
    </div>
  </div>
);

//Returns list item containing a NavLink
const NavLinkItem = ({ anchor, path }) => (
  <li>
    <NavLink exact to={path} activeClassName="active" onClick={toggleNav}>
      {anchor}
    </NavLink>
  </li>
);

export default App;
