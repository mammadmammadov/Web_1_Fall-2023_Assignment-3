import React from "react";
import "../assets/Home.css";

function Project(props) {
  return (
    <li className="project-item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a className="view-project" href={props.link} target="_blank">
        View Project
      </a>
    </li>
  );
}

export default Project;
