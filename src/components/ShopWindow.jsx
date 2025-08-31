import ItemWindow from "./ItemWindow";
import { shopItemData } from "../constants/shopItemData.js";

const ShopWindow = ({
  isShopWindowOpen,
  closeWindow,
  openMsgBox,
  gameSystemData,
  updateSystemData,
  charData,
  updateCharData,
  bag,
  setBag,
}) => {
  return (
    <ItemWindow
      isWindowOpen={isShopWindowOpen}
      itemList={shopItemData}
      windowTitle={"SHOP"}
      closeWindow={closeWindow}
      openMsgBox={openMsgBox}
      gameSystemData={gameSystemData}
      updateSystemData={updateSystemData}
      charData={charData}
      updateCharData={updateCharData}
      bag={bag}
      setBag={setBag}
    />
  );
};

export default ShopWindow;
