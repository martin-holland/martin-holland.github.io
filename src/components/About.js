import React from "react";
import personalPic from "../assets/images/mypicture1.jpg";

function About(props) {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="box">
          <img
            src={personalPic}
            alt="personal pic"
            className="about-img"
            width="150"
            height="150"
          />
          <p>
            Hello, my name is Martin Holland. I’m a web developer from Helsinki,
            Finland. I’m studying Full Stack Web Developer program in the
            Helsinki Business College to hone and sharpen my web development
            skills to combine my programming knowledge and technical experise
            together. My core strength is taking specifications and turning them
            into solutions through the use of Javascript. Below I have presented
            some of my past projects for you to review. My end goal is to join a
            team where I can collaborate and learn from whilst producing truly
            amazing content. You can find me on LinkedIn and Instagram or reach
            me via email.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
