import ItemWindow from "./ItemWindow";
import { eventStat } from "../constants/eventStat.js";

const OutWindow = ({
  isOutWindowOpen,
  closeWindow,
  openMsgBox,
  gameSystemData,
  updateSystemData,
  charData,
  updateCharData,
}) => {
  return (
    <ItemWindow
      isWindowOpen={isOutWindowOpen}
      itemList={eventStat}
      windowTitle={"OUT"}
      closeWindow={closeWindow}
      openMsgBox={openMsgBox}
      gameSystemData={gameSystemData}
      updateSystemData={updateSystemData}
      charData={charData}
      updateCharData={updateCharData}
    />
  );
};

export default OutWindow;
