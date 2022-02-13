import React from "react";
import logo from "../assets/Logo.svg";

function Header(props) {
  return (
    <header>
      <div className="navBar">
        <img
          className="headlinelogo"
          src={logo}
          alt="my-logo"
          width="80"
          height="80"
        />
        <nav className="nav-item">
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contacts</a>
        </nav>
        <a href="/" id="menu">
          <span className="material-icons">menu</span>
        </a>
      </div>
      <div className="hero-banner">
        <div className="welcome">
          <h1 className="welcome-text">Martin Holland Portfolio</h1>
        </div>
        <div className="text-animation">
          <h2>
            I am <span></span>
          </h2>
        </div>
        <div id="links">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/martin-holland-5099071b9/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="contact-link"
            href="https://github.com/martin-holland"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
