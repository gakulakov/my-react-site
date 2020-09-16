import React, { Component } from "react";
import classes from "./MainCardBoard.module.css";
import Tilt from "react-tilt";

export default class MainCardBoard extends Component {
  render() {
    const tiltOptions = {
      max: 8,
      reverse: true,
      transition: true,
      axis: "y",
      transformStyle: "preserve-3d",
      // perspective: 2000,
    };
    return (
      <Tilt className={classes.FirstCard} options={tiltOptions}>
        <div className={classes.SecondCard}>
          {/*{this.props.mainValue}*/}
          <h1>Здесь будут главные Новости</h1>
        </div>
      </Tilt>
    );
  }
}
