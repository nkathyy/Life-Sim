import "./ItemWindow.css";
import ItemCard from "./ItemCard";

const ItemWindow = ({ isWindowOpen, itemList, windowTitle, closeWindow }) => {
  return (
    <div
      style={{ display: isWindowOpen ? "flex" : "none" }}
      className="windowWrapper"
    >
      <div className="itemWindow">
        <div className="windowBar">
          <h2>{windowTitle}</h2>
          <div className="boxes" onClick={closeWindow}>
            X
          </div>
        </div>
        <div className="itemContent">
          {itemList.map((item) => (
            <ItemCard key={item.index} itemImgSrc={item.itemImgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemWindow;
