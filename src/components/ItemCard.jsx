import "./ItemCard.css";

const ItemCard = ({ windowType, item, onClick, bag }) => {
  function updateItem() {
    onClick(item.index);
  }

  const isDisabledItem = () => {
    if (windowType === "OUT") {
      return false;
    } else {
      return bag.some((num) => num === item.index);
    }
  };

  return (
    <div
      className={isDisabledItem() ? "itemCard sold" : "itemCard"}
      onClick={isDisabledItem() ? () => {} : updateItem}
    >
      <img src={item.itemImgSrc} alt="item"></img>
    </div>
  );
};

export default ItemCard;
