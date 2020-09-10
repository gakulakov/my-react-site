import React, { Component } from "react";
import classes from "./NavIcons.module.css";
import About from "./svgIcons/About.svg";
import Home from "./svgIcons/Home.svg";
import Path from "./svgIcons/Path.svg";
import GitHub from "./svgIcons/GitHub.svg";

export default class NavIcons extends Component {
  render() {
    return (
      <div className={classes.NavIcons}>
        <ul>
          <li className={classes.GitHub}>
            <img src={GitHub} alt={"GitHub"} />
          </li>
          <div className={classes.MainIcons}>
            <li className={classes.Jobs}>
              <img src={Path} alt={"Path"} />
            </li>
            <li className={classes.Home}>
              <img src={Home} alt={"Home"} />
            </li>
            <li className={classes.AboutMe}>
              <img src={About} alt={"About"} />
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
