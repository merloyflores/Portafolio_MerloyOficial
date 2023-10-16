import { Icon } from "@iconify/react";
import * as React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/merloyflores/"
          className="right"
          rel="noreferrer"
        >
          <p> Linkedin </p>
          <Icon icon="skill-icons:linkedin" />
        </a>
      </div>
    </footer>
  );
};
