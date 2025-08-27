import ItemWindow from "./ItemWindow";

const testList = [
  {
    index: 1,
    itemImgSrc: "",
    itemName: "test name",
    itemDescription: "test description",
  },
  {
    index: 2,
    itemImgSrc: "",
    itemName: "test name 2",
    itemDescription: "test description 2",
  },
];

const ShopWindow = ({ isShopWindowOpen, closeWindow }) => {
  return (
    <ItemWindow
      isWindowOpen={isShopWindowOpen}
      itemList={testList}
      windowTitle={"SHOP"}
      closeWindow={closeWindow}
    />
  );
};

export default ShopWindow;
