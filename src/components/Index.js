import React from "react";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";
import About from "./About";
import { cardData } from "../portfolio";
import { skillsData } from "../skillConfig";
import { backendProjects } from "../backend";

function Index() {
  return (
    <div>
      <div>
        <button id="myBtn" title="Go to top">
          Top
        </button>

        <main>
          <About />

          <section id="projects">
            <div className="container">
              <h2>Front End Projects</h2>
              <div className="card-box">
                {cardData.map((card) => {
                  return <ProjectCard key={card.id} data={card} />;
                })}
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <h2>Back End Projects</h2>
              <div className="card-box">
                {backendProjects.map((card) => {
                  return <ProjectCard key={card.id} data={card} />;
                })}
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="container">
              <h2>Skills</h2>
              <div className="card-box">
                {skillsData.map((skill) => {
                  return <SkillsCard key={skill.id} data={skill} />;
                })}
              </div>
            </div>
          </section>
        </main>
        <script src="index.js"></script>
      </div>
    </div>
  );
}

export default Index;
