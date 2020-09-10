import React from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div className={classes.Header}>
      <ul>
        <li>Главная</li>
        <li>О нас</li>
        <li>Работы</li>
        <li>Презентация</li>
      </ul>
    </div>
  );
};
