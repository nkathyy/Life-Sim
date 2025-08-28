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
}) => {
  const [selectedItem, setSelectedItem] = useState(1); //item index
  const [isOpenDetailCard, setIsOpenDetailCard] = useState(false);

  const updateSelectedItem = (index) => {
    if (index > 0) {
      setSelectedItem(index);
      setIsOpenDetailCard(true);
    }
  };

  return (
    <div
      style={{ display: isWindowOpen ? "flex" : "none" }}
      className="windowWrapper"
    >
      <div className="itemWindow">
        {itemList != null ? (
          <DetailCard
            style={{ display: isOpenDetailCard ? "flex" : "none" }}
            itemImgSrc={itemList[selectedItem - 1].itemImgSrc}
            itemName={itemList[selectedItem - 1].itemName}
            itemDescription={itemList[selectedItem - 1].itemDescription}
            onClick={() => {
              setIsOpenDetailCard(false);
            }}
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
                itemImgSrc={item.itemImgSrc}
                itemIndex={item.index}
                onClick={updateSelectedItem}
              />
            ))}
          </div>
        ) : (
          <div className="dataContent">
            {DataList.map((data) => (
              <div className="dataLine">
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
