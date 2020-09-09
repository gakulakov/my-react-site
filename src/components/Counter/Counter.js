import React, { Component } from "react";
import classes from "./Counter.module.css";
import Tilt from "react-tilt";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const counter = this.state.count;

    const plusHandler = () => {
      this.setState({
        count: counter + 1,
      });
    };

    const minusHandler = () => {
      this.setState({
        count: counter - 1,
      });
    };

    const tiltOptions = {
      max: 25,
      reverse: true,
      transition: false,
      transformStyle: "preserve-3d",
    };

    return (
      <div className={classes.Counter}>
        <Tilt className={classes.Tilt} options={tiltOptions}>
          <div className="Tilt-inner">
            <p>👽</p>

            <h1>{counter}</h1>
            <Tilt options={tiltOptions}>
              <button onClick={() => plusHandler()}>+</button>
            </Tilt>
            <button onClick={() => minusHandler()}> -</button>
          </div>
        </Tilt>
      </div>
    );
  }
}
