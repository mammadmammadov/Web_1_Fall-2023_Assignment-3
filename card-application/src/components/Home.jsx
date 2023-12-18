import React from "react";
import "../assets/Home.css";
import Project from "./Project";
import projectList from "./ProjectList";

function createProject(project){
  return <Project
    title = {project.title}
    description = {project.description}
    link = {project.link}
  />
}

function Home() {
  return (
    <div className="grid-container">
      <h1>i'm Mammad Mammadov</h1>
      <p>
        I'm passionate about web development and have worked on several
        projects. Below is a list of my projects:
      </p>
      <ul className="projects-list">
        {projectList.map(createProject)}
        
      </ul>
    </div>
  );
}

export default Home;
