import React from "react";
import classes from "./NewsCard.module.css";
import Tilt from "react-tilt";

const NewsCard = (props) => {
  const tiltOptions = {
    max: 25,
    reverse: true,
    transition: false,
    transformStyle: "preserve-3d",
  };
  return (
    <Tilt className={classes.OuterCard} options={tiltOptions}>
      <div className="Tilt-inner">
        <div>
          <div className={classes.Inner}>
            <div className={classes.Text}>
              <h1>{props.label}</h1>
            </div>
            <div className={classes.View}>
              <button className={classes.Button}>View</button>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default NewsCard;
