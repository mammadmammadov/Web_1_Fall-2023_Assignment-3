import React from "react";
import "../assets/Home.css";

const projects = [
  {
    id: 1,
    title: "Dummy Bazaar",
    description: "Online store web application that fetches product data from the dummyjson.com, products endpoint and displays it on a user-friendly web interface along with cool functionalities",
    link: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Simon Game",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Skii Game",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 4,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 5,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 6,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 7,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 8,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 9,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 10,
    title: "QR Code Generator",
    description: "Description of Project 2.",
    link: "https://github.com/yourusername/project2",
  }
];

function Home() {
  return (
    <div className="grid-container">
      <h1>i'm Mammad Mammadov</h1>
      <p>
        I'm passionate about web development and have worked on several
        projects. Below is a list of my projects:
      </p>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
