import React from "react";

function ProjectCard(cardInfo) {
  return (
    <div className="card">
      <img
        src={cardInfo.data.pictureLoc}
        alt="animals"
        className="projImg"
        width="300"
        height="200"
      />
      <div className="content">
        <h3>{cardInfo.data.title}</h3>
        <p>{cardInfo.data.message}</p>
        <div className="divider">
          <a href={cardInfo.data.liveLink} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-link"></i>
          </a>
          <a href={cardInfo.data.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
