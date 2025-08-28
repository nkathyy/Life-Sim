import ItemWindow from "./ItemWindow";

const DataWindow = ({ DataList, isDataWindowOpen, closeWindow }) => {
  return (
    <ItemWindow
      isWindowOpen={isDataWindowOpen}
      DataList={DataList}
      windowTitle={"DATA"}
      closeWindow={closeWindow}
    />
  );
};

export default DataWindow;
