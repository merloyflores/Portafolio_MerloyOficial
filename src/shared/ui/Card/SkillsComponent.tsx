import * as React from "react";
import { skillsList } from "./config";

export const SkillsComponent = () => {
  return (
    <>
      {skillsList.map((skill, index) => (
        <article className="card" key={index}>
          <span className="title">{skill.title}</span>
          <img
            className={`logo ${skill.title}`}
            src={skill.img}
            alt={skill.title}
          />
          {/* <strong className="level">{skill.level}</strong> */}
        </article>
      ))}
    </>
  );
};
