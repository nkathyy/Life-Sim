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
  bag,
  setBag,
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

    openMsgBox({ line: itemList[selectedItem].result(randomAddNum) });
  }

  function updateBuyItemStat() {
    if (itemList[selectedItem].price > charData[0].value) {
      openMsgBox({ line: "Do not have enough money" });
      return;
    }

    if (itemList[selectedItem].index === 8) {
      const randomAddNum = Math.floor(Math.random() * 2) + 7;
      let newCharData = charData.map((data) => {
        return {
          index: data.index,
          name: data.name,
          value:
            data.index !== 0
              ? Number(randomAddNum + data.value)
              : Number(data.value - itemList[selectedItem].price),
          displayName: data.displayName,
        };
      });
      updateCharData(newCharData);
      updateSelectedItem(-1);

      openMsgBox({ line: itemList[selectedItem].result(randomAddNum) });
    } else if ([5, 6, 7].some((num) => num === itemList[selectedItem].index)) {
      const randomAddNum = Math.floor(Math.random() * 2) + 10;
      let newCharData = charData.map((data) => {
        return itemList[selectedItem].dataNameList.some(
          (name) => name === data.name
        )
          ? {
              index: data.index,
              name: data.name,
              value: Number(randomAddNum + data.value),

              displayName: data.displayName,
            }
          : data.index === 0
          ? {
              index: data.index,
              name: data.name,
              value: Number(data.value - itemList[selectedItem].price),
              displayName: data.displayName,
            }
          : data;
      });
      updateCharData(newCharData);
      updateSelectedItem(-1);

      openMsgBox({ line: itemList[selectedItem].result(randomAddNum) });
    } else {
      setBag([...bag, itemList[selectedItem].index]);

      let newCharData = charData.map((data) => {
        return data.name === "coins"
          ? {
              index: data.index,
              name: data.name,
              value: Number(data.value - itemList[selectedItem].price),
              displayName: data.displayName,
            }
          : data;
      });
      updateCharData(newCharData);
      updateSelectedItem(-1);

      openMsgBox({ line: itemList[selectedItem].result() });
    }
  }

  return (
    isWindowOpen && (
      <div className="windowWrapper">
        <div className="itemWindow">
          {itemList != null
            ? isOpenDetailCard && (
                <DetailCard
                  item={itemList[selectedItem]}
                  closeWindow={() => {
                    setIsOpenDetailCard(false);
                  }}
                  updateDailyWorkStat={
                    windowTitle === "OUT"
                      ? updateDailyWorkStat
                      : updateBuyItemStat
                  }
                />
              )
            : ""}
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
                  windowType={windowTitle === "OUT" ? "OUT" : "SHOP"}
                  item={item}
                  onClick={updateSelectedItem}
                  bag={bag}
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
    )
  );
};

export default ItemWindow;
