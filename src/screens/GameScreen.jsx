import EventCard from "../components/EventCard.jsx";
import "./GameScreen.css";
import MessageBox from "../components/MessageBox.jsx";
import OutWindow from "../components/OutWindow.jsx";
import ShopWindow from "../components/ShopWindow.jsx";
import { useEffect, useState, useCallback } from "react";
import { baseData } from "../constants/baseData.js";
import DataWindow from "../components/DataWindow.jsx";
import InvitationCard from "../components/InvitationCard.jsx";
import { dailyDateData } from "../constants/dateData.js";
import { getEnding } from "../components/ending.js";
import { invitation } from "../constants/dateData.js";

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

  const [isInvitationCardOpen, setIsInvitationCardOpen] = useState(false);
  const [invitationIndex, setInvitationIndex] = useState(0);
  const invitationIndexList = invitation.map((date) => date.dateDay);
  const openInvitationCard = (index) => {
    setInvitationIndex(index);
    setIsInvitationCardOpen(true);
  };

  const closeInvitationCard = () => {
    setIsInvitationCardOpen(false);
  };

  const [isMsgOpen, setIsMsgOpen] = useState(false);
  const [msgBoxLine, setMsgBoxLine] = useState("");
  const [msgBoxType, setMsgBoxType] = useState("normal"); // for day change
  const openMsgBox = useCallback(({ line, type }) => {
    setIsMsgOpen(true);
    setMsgBoxLine(line);
    setMsgBoxType(type);
  }, []);

  const closeMsgBox = () => {
    setIsMsgOpen(false);
  };

  const [charData, setCharData] = useState(baseData);
  const [bag, setBag] = useState([]);

  const closeAllWindow = useCallback(
    (newDay, message) => {
      closeOutWindow();
      closeShopWindow();
      closeDataWindow();
      // setMsgBoxType("normal");

      if (invitationIndexList.some((num) => num === newDay)) {
        openMsgBox({ line: message, type: "triggerInvitation" });
      } else {
        openMsgBox({ line: message, type: "normal" });
      }
    },
    [openMsgBox, invitationIndexList]
  );

  //update Day
  function updateDay() {
    if (gameSystemData.dailyWorkTimes === 3 && gameSystemData.day < 10) {
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

      closeAllWindow(newStat, "Day updated. Added 200 coins.");
    }
  }

  //invitation
  function triggerInvitation() {
    setMsgBoxType("normal");
    closeMsgBox();

    openInvitationCard(invitationIndexList.indexOf(gameSystemData.day));
  }

  //go to ending
  useEffect(() => {
    if (gameSystemData.dailyWorkTimes === 3 && gameSystemData.day === 10) {
      const ending = getEnding(charData);
      updateSystemData({
        day: 1,
        dailyWorkTimes: 0,
        dateTimes: 0,
        ending: ending,
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

    const dateIndex = Math.floor(Math.random() * dailyDateData.length);
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
      <InvitationCard
        isBoxOpen={isInvitationCardOpen}
        item={invitation[invitationIndex]}
        closeWindow={closeInvitationCard}
      />
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
        boxType={msgBoxType}
        updateDay={updateDay}
        triggerInvitation={triggerInvitation}
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
