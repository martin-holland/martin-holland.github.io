import React from "react";

function SkillsCard(skillsData) {
  return (
    <div className="card">
      <div className="icon-div">
        <img
          src={skillsData.data.skillImageLoc}
          alt="figma"
          className="skill-icon"
        />
      </div>
      <progress
        className="file"
        value={skillsData.data.progress}
        max="100"
      ></progress>
      <a
        href="https://github.com/meanjula/responsive_webdesign/blob/master/project_4/documentation.html"
        target="_blank"
        rel="noreferrer"
      >
        {skillsData.data.title}
      </a>
    </div>
  );
}

export default SkillsCard;
