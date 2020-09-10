import React, { Component } from "react";
import classes from "./MainCardBoard.module.css";

export default class MainCardBoard extends Component {
  render() {
    return (
      <div className={classes.FirstCard}>
        <div className={classes.SecondCard}></div>
      </div>
    );
  }
}
