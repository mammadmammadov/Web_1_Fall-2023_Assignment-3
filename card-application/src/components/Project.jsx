import React from "react";
import "../assets/Home.css";


function Project(props) {
  return (
    <li className="project-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </li>
  );
}

export default Project;
