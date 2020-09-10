import React from "react";
import classes from "./App.module.css";
import { Header } from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import MainCardBoard from "./components/MainCardBoard/MainCardBoard";
import NavIcons from "./components/NavIcons/NavIcons";
import NewsCards from "./components/NewsCards/NewsCards";

function App() {
  return (
    <div className={classes.App}>
      {/*<Header />*/}
      <MainCardBoard />
      <NewsCards />
      <NavIcons />
      {/*<Counter />*/}
    </div>
  );
}

export default App;
