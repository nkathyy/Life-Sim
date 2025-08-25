import EventCard from "./EventCard";
import "./GameScreen.css";
import OutWindow from "./OutWindow";
import { useState } from "react";

const GameScreen = () => {
  const [isOutWindowOpen, setIsOutWindowOpen] = useState(true);

  const openOutWindow = () => {
    setIsOutWindowOpen(true);
  };

  const closeOutWindow = () => {
    setIsOutWindowOpen(false);
  };

  return (
    <>
      <OutWindow
        isOutWindowOpen={isOutWindowOpen}
        closeWindow={closeOutWindow}
      />
      <div className="charContainer"></div>
      <div className="eventContainer">
        <EventCard title={"Sample"} onClick={openOutWindow} />
        <EventCard title={"例子"} />
        <EventCard title={"例子"} />
        <EventCard title={"Sample"} />
      </div>
    </>
  );
};

export default GameScreen;
