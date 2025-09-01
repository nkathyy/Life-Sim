import EventCard from "../components/EventCard.jsx";
import "./GameScreen.css";
import MessageBox from "../components/MessageBox.jsx";
import OutWindow from "../components/OutWindow.jsx";
import ShopWindow from "../components/ShopWindow.jsx";
import { useEffect, useState, useCallback } from "react";
import { baseData } from "../constants/baseData.js";
import DataWindow from "../components/DataWindow.jsx";
import { dailyDateData } from "../constants/dateData.js";

const GameScreen = ({ gameSystemData, updateSystemData, toEndingFunction }) => {
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
  const openMsgBox = useCallback(({ line }) => {
    setIsMsgOpen(true);

    setMsgBoxLine(line);
  }, []);

  const closeMsgBox = () => {
    setIsMsgOpen(false);
  };

  const [charData, setCharData] = useState(baseData);
  const [bag, setBag] = useState([]);

  const closeAllWindow = useCallback(
    (message) => {
      closeOutWindow();
      closeShopWindow();
      closeDataWindow();
      openMsgBox({ line: message });
      console.log(message);
    },
    [openMsgBox]
  );

  //day update
  useEffect(() => {
    if (gameSystemData.dailyWorkTimes === 3 && gameSystemData.day < 3) {
      const newStat = gameSystemData.day + 1;
      updateSystemData({
        day: newStat,
        dailyWorkTimes: 0,
        dateTimes: 0,
        ending: 0,
      });

      let newCharData = charData.map((data) => {
        return data.index === 0
          ? {
              index: data.index,
              name: data.name,
              value: Number(data.value + 200),
              displayName: data.displayName,
            }
          : data;
      });
      setCharData(newCharData);

      closeAllWindow("Day updated. Added 200 coins.");
    } else if (
      gameSystemData.dailyWorkTimes === 3 &&
      gameSystemData.day === 3
    ) {
      const ending = () => {
        return 0;
      };
      updateSystemData({
        day: 1,
        dailyWorkTimes: 0,
        dateTimes: 0,
        ending: ending(),
      });
      toEndingFunction();
    }
  }, [
    gameSystemData,
    updateSystemData,
    toEndingFunction,
    closeAllWindow,
    charData,
  ]);

  //dailyDate process
  function dailyDateProcess() {
    if (gameSystemData.dateTimes >= 2) {
      openMsgBox({ line: "you can only date twice a day." });
      return;
    }

    const newStat = gameSystemData.dateTimes + 1;
    updateSystemData({
      day: gameSystemData.day,
      dailyWorkTimes: gameSystemData.dailyWorkTimes,
      dateTimes: newStat,
      ending: 0,
    });

    const dateIndex = Math.floor(Math.random() * 8);
    const randomAddNum = Math.floor(Math.random() * 2) + 5;
    const currentDate = dailyDateData[dateIndex];

    let newCharData = charData.map((data) => {
      return data.name === currentDate.dataName
        ? {
            index: data.index,
            name: data.name,
            value: Number(data.value + randomAddNum),
            displayName: data.displayName,
          }
        : data;
    });
    setCharData(newCharData);

    openMsgBox({ line: currentDate.result(randomAddNum) });
  }

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
        <EventCard title={"例子"} onClick={dailyDateProcess} />
        <EventCard title={"Sample"} onClick={openDataWindow} />
      </div>
    </>
  );
};

export default GameScreen;
