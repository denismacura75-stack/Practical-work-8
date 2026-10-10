import React from "react";
import { social } from "./data";

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {social.map((item) => {
        return (
          <li key={item.id}>
            <a>{item.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;