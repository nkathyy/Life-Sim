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

const OutWindow = ({ isOutWindowOpen, closeWindow }) => {
  return (
    <ItemWindow
      isWindowOpen={isOutWindowOpen}
      itemList={testList}
      windowTitle={"OUT"}
      closeWindow={closeWindow}
    />
  );
};

export default OutWindow;
