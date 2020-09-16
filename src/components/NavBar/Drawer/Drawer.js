import React, { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
  "Главная",
  "Контакты",
  "Обо мне",
  "Портфолио",
  "GitHub",
  "Резюме",
  "Презентация",
];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>{link}</a>
        </li>
      );
    });
  }
  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <div className={cls.join(" ")}>
          <nav className={classes.Drawer}>
            <div className={classes.InnerLinks}>
              <ul>{this.renderLinks()}</ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Drawer;
