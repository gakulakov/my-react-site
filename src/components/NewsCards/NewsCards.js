import React, { Component } from "react";
import classes from "./NewsCards.module.css";
import NewsCard from "./NewsCard/NewsCard";

export default class NewsCards extends Component {
  render() {
    return (
      <div className={classes.Outer}>
        <NewsCard label={"Android Apps"} />
        <NewsCard label={"Suites"} />
        <NewsCard label={"Telegram Bots"} />
        <NewsCard label={"Learning IT"} />
      </div>
    );
  }
}
