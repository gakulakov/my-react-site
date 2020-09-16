import React, { useState } from "react";
import classes from "./App.module.css";
import MainCardBoard from "./components/MainCardBoard/MainCardBoard";
import NavIcons from "./components/NavIcons/NavIcons";
import NewsCards from "./components/NewsCards/NewsCards";
import NavBar from "./components/NavBar/NavBar";
import Drawer from "./components/NavBar/Drawer/Drawer";
import Backdrop from "./components/UI/Backdrop/Backdrop";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenuHandler = () => {
    setMenu(!menu);
  };

  const menuCloseHandler = () => {
    setMenu(false);
  };

  return (
    <div className={classes.App}>
      <h1>Георгий Кулаков</h1>
      <Drawer isOpen={menu} />
      <NavBar onToggle={toggleMenuHandler} isOpen={menu} />
      <MainCardBoard mainValue={""} />
      <NewsCards />
      <NavIcons />
      {menu ? <Backdrop onClick={menuCloseHandler} /> : null}
    </div>
  );
}

export default App;
