import "./ItemWindow.css";
import ItemCard from "./ItemCard";
import DetailCard from "./DetailCard";
import { useState } from "react";

const ItemWindow = ({
  isWindowOpen,
  itemList,
  DataList,
  windowTitle,
  closeWindow,
  openMsgBox,
  gameSystemData,
  updateSystemData,
  charData,
  updateCharData,
}) => {
  const [selectedItem, setSelectedItem] = useState(1); //item index
  const [isOpenDetailCard, setIsOpenDetailCard] = useState(false);

  const updateSelectedItem = (index) => {
    if (index >= 0) {
      setSelectedItem(index);
      setIsOpenDetailCard(true);
    } else {
      setIsOpenDetailCard(false);
    }
  };

  function updateDailyWorkStat() {
    let newSysData = { ...gameSystemData };
    newSysData.dailyWorkTimes += 1;
    updateSystemData(newSysData);

    const randomAddNum = Math.floor(Math.random() * 2) + 5;

    let newCharData = charData.map((data) => {
      return data.name === itemList[selectedItem].dataName
        ? {
            index: data.index,
            name: data.name,
            value: Number(randomAddNum + data.value),
            displayName: data.displayName,
          }
        : data;
    });
    updateCharData(newCharData);
    updateSelectedItem(-1);

    // openMsgBox({ line: "tesing" });

    openMsgBox({ line: itemList[selectedItem].result(randomAddNum) });
  }

  return (
    <div
      style={{ display: isWindowOpen ? "flex" : "none" }}
      className="windowWrapper"
    >
      <div className="itemWindow">
        {itemList != null ? (
          <DetailCard
            style={{ display: isOpenDetailCard ? "flex" : "none" }}
            item={itemList[selectedItem]}
            closeWindow={() => {
              setIsOpenDetailCard(false);
            }}
            updateDailyWorkStat={
              updateDailyWorkStat ? updateDailyWorkStat : () => {}
            }
          />
        ) : (
          ""
        )}
        <div className="windowBar">
          <h2>{windowTitle}</h2>
          <div className="boxes right" onClick={closeWindow}>
            X
          </div>
        </div>
        {itemList != null ? (
          <div className="itemContent">
            {itemList.map((item) => (
              <ItemCard
                key={item.index}
                item={item}
                onClick={updateSelectedItem}
              />
            ))}
          </div>
        ) : (
          <div className="dataContent">
            {DataList.map((data) => (
              <div className="dataLine" key={data.index}>
                <div>
                  <b>{data.displayName}</b>
                </div>
                <div>{data.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemWindow;
