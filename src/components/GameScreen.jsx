import EventCard from "./EventCard";
import "./GameScreen.css";
import MessageBox from "./MessageBox";
import OutWindow from "./OutWindow";
import ShopWindow from "./ShopWindow";
import { useState } from "react";

const GameScreen = () => {
  const [isOutWindowOpen, setIsOutWindowOpen] = useState(false);
  const openOutWindow = () => {
    setIsOutWindowOpen(true);
  };

  const closeOutWindow = () => {
    setIsOutWindowOpen(false);
  };

  const [isShopWindowOpen, setIsShopWindowOpen] = useState(false);
  const openShopWindow = () => {
    setIsShopWindowOpen(true);
  };

  const closeShopWindow = () => {
    setIsShopWindowOpen(false);
  };

  const [isMsgOpen, setIsMsgOpen] = useState(false);
  const openMsgBox = () => {
    setIsMsgOpen(true);
  };

  const closeMsgBox = () => {
    setIsMsgOpen(false);
  };

  return (
    <>
      <MessageBox
        isMsgOpen={isMsgOpen}
        msg={`This is a test message for testing a long sentence. test`}
        closeWindow={closeMsgBox}
      />
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
