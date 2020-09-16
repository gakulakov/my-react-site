import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const cls = [classes.NavBar];

  if (props.isOpen) {
    cls.push(classes.open);
  }

  return (
    <div className={cls.join(" ")} onClick={props.onToggle}>
      <li className={classes.Cut} />
      <li className={classes.Cut} />
      <li className={classes.Cut} />
    </div>
  );
};

export default NavBar;
