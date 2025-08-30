import EventCard from "../components/EventCard.jsx";
import "./GameScreen.css";
import MessageBox from "../components/MessageBox.jsx";
import OutWindow from "../components/OutWindow.jsx";
import ShopWindow from "../components/ShopWindow.jsx";
import { useState } from "react";
import { baseData } from "../constants/baseData.js";
import DataWindow from "../components/DataWindow.jsx";

const GameScreen = ({ gameSystemData, updateSystemData }) => {
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

  const [isDataWindowOpen, setIsDataWindowOpen] = useState(false);
  const openDataWindow = () => {
    setIsDataWindowOpen(true);
  };

  const closeDataWindow = () => {
    setIsDataWindowOpen(false);
  };

  const [isMsgOpen, setIsMsgOpen] = useState(false);
  const [msgBoxLine, setMsgBoxLine] = useState("");
  const openMsgBox = ({ line }) => {
    setIsMsgOpen(true);

    setMsgBoxLine(line);
    console.log(line);
    console.log(msgBoxLine);
  };

  const closeMsgBox = () => {
    setIsMsgOpen(false);
  };

  const [charData, setCharData] = useState(baseData);
  const [bag, setBag] = useState([]);

  return (
    <>
      <DataWindow
        DataList={charData}
        isDataWindowOpen={isDataWindowOpen}
        closeWindow={closeDataWindow}
      />
      <OutWindow
        isOutWindowOpen={isOutWindowOpen}
        closeWindow={closeOutWindow}
        openMsgBox={openMsgBox}
        gameSystemData={gameSystemData}
        updateSystemData={updateSystemData}
        charData={charData}
        updateCharData={setCharData}
      />
      <ShopWindow
        isShopWindowOpen={isShopWindowOpen}
        closeWindow={closeShopWindow}
        openMsgBox={openMsgBox}
        gameSystemData={gameSystemData}
        updateSystemData={updateSystemData}
        charData={charData}
        updateCharData={setCharData}
        bag={bag}
        setBag={setBag}
      />
      <MessageBox
        isMsgOpen={isMsgOpen}
        msg={msgBoxLine}
        closeWindow={closeMsgBox}
      />
      <div className="charContainer"></div>
      <div className="eventContainer">
        <EventCard title={"Sample"} onClick={openOutWindow} />
        <EventCard title={"例子"} onClick={openShopWindow} />
        <EventCard title={"例子"} />
        <EventCard title={"Sample"} onClick={openDataWindow} />
      </div>
    </>
  );
};

export default GameScreen;
