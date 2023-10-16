import { Icon } from "@iconify/react";
import * as React from "react";
import { rightList } from "../config";

export const Right = () => {
  return (
    <ul className="right">
      {rightList.map((item, index) => (
        <li key={index}>
          <a
            target={item.target}
            className={`link ${item.title}`}
            href={item.link}
          >
            {item.icon && <Icon className="gatsby" icon={item.icon} />}
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
