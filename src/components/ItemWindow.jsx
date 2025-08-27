import "./ItemWindow.css";
import ItemCard from "./ItemCard";
import DetailCard from "./DetailCard";
import { useState } from "react";

const ItemWindow = ({ isWindowOpen, itemList, windowTitle, closeWindow }) => {
  const [selectedItem, setSelectedItem] = useState(0); //item index
  const [isOpenDetailCard, setIsOpenDetailCard] = useState(false);

  const updateSelectedItem = (index) => {
    if (index > 0) {
      setSelectedItem(index);
      setIsOpenDetailCard(true);
    }
    console.log(index);
  };

  return (
    <div
      style={{ display: isWindowOpen ? "flex" : "none" }}
      className="windowWrapper"
    >
      <div className="itemWindow">
        <DetailCard
          style={{ display: isOpenDetailCard ? "flex" : "none" }}
          itemImgSrc={itemList[selectedItem].itemImgSrc}
          itemName={itemList[selectedItem].itemName}
          itemDescription={itemList[selectedItem].itemDescription}
          onClick={() => {
            setIsOpenDetailCard(false);
          }}
        />
        <div className="windowBar">
          <h2>{windowTitle}</h2>
          <div className="boxes" onClick={closeWindow}>
            X
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default ItemWindow;
