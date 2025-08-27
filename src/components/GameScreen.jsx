import EventCard from "./EventCard";
import "./GameScreen.css";
import OutWindow from "./OutWindow";
import ShopWindow from "./ShopWindow";
import { useState } from "react";

const GameScreen = () => {
  const [isOutWindowOpen, setIsOutWindowOpen] = useState(false);
  const [isShopWindowOpen, setIsShopWindowOpen] = useState(false);

  const openOutWindow = () => {
    setIsOutWindowOpen(true);
  };

  const closeOutWindow = () => {
    setIsOutWindowOpen(false);
  };

  const openShopWindow = () => {
    setIsShopWindowOpen(true);
  };

  const closeShopWindow = () => {
    setIsShopWindowOpen(false);
  };

  return (
    <>
      <OutWindow
        isOutWindowOpen={isOutWindowOpen}
        closeWindow={closeOutWindow}
      />
      <ShopWindow
        isShopWindowOpen={isShopWindowOpen}
        closeWindow={closeShopWindow}
      />
      <div className="charContainer"></div>
      <div className="eventContainer">
        <EventCard title={"Sample"} onClick={openOutWindow} />
        <EventCard title={"例子"} onClick={openShopWindow} />
        <EventCard title={"例子"} />
        <EventCard title={"Sample"} />
      </div>
    </>
  );
};

export default GameScreen;
