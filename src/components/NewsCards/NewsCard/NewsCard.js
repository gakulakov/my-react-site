import React from "react";
import classes from "./NewsCard.module.css";
import Tilt from "react-tilt";
import logo from "./img/logo.png";

const NewsCard = (props) => {
  const tiltOptionsAll = {
    max: 25,
    reverse: true,
    transition: false,
    transformStyle: "preserve-3d",
  };

  const tiltOptionsButton = {
    max: 0,
    reverse: true,
    transition: true,
    transformStyle: "preserve-3d",
  };
  return (
    <Tilt className={classes.OuterCard} options={tiltOptionsAll}>
      <div className={classes.CardImg}>
        <img src={logo} alt={logo} />
      </div>
      <div className={classes.Text}>
        <h1>{props.label}</h1>
      </div>
      <Tilt className={classes.View} options={tiltOptionsButton}>
        <button className={classes.Button}>View</button>
      </Tilt>
    </Tilt>
  );
};

export default NewsCard;
