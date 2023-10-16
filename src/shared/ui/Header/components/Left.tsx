import { Icon } from "@iconify/react";
import { Link } from "gatsby";
import * as React from "react";
import { leftList } from "../config";

export const Left = () => {
  return (
    <ul className="left">
      {leftList.map((item, index) => (
        <li key={index}>
          <Link
            className={`link ${item.title}`}
            target={item.target}
            to={item.link}
          >
            {item.icon && <Icon icon={item.icon} />}
            <span> {item.title} </span>
          </Link>
        </li>
      ))}
      <li>
        <a
          target="_blank"
          className="link Github"
          href="https://github.com/merloyflores"
          rel="noreferrer"
        >
          <Icon icon="mdi:github" />
          <span> Github </span>
        </a>
      </li>
    </ul>
  );
};
