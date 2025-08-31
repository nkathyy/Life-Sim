import ItemWindow from "./ItemWindow";
import { eventData } from "../constants/eventData.js";

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
      itemList={eventData}
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
