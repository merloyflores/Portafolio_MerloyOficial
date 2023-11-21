import * as React from "react";
import { projectsList } from "./config";

export const ProjectsComponent = () => {
  return (
    <>
      {projectsList.map((project, index) => (
        <a
          target="_blank"
          href={`${project.link}`}
          className="card"
          key={index}
          rel="noreferrer"
        >
          <span className="title">{project.title}</span>
          <img
            className={`screenshot ${project.title}`}
            src={project.img}
            alt={project.title}
          />
          <strong className="skill">{project.skill}</strong>
          <strong className="skill-1">{project.description}</strong>
        </a>
      ))}
    </>
  );
};
