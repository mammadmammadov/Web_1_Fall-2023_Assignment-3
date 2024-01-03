import React from "react";
import "../assets/Home.css";
import Project from "./Project";
import ProjectList from "../ProjectList";

function createProject(project) {
  return (
    <Project
      title={project.title}
      description={project.description}
      link={project.link}
    />
  );
}

function Home() {
  return (
    <div className="grid-container">
      <h1>i'm Mammad Mammadov</h1>
      <p className="about-me">
        I am a junior Information Technology student at ADA University,
        Azerbaijan. I consider myself an agile, lifelong learner who values
        every opportunity for academic and professional growth. I possess strong
        theoretical and practical skills in principles of information systems,
        programming, and Math. My main interest areas are Full Stack Development
        and Machine Learning.
      </p>

      <ul className="projects-list">{ProjectList.map(createProject)}</ul>
    </div>
  );
}

export default Home;
