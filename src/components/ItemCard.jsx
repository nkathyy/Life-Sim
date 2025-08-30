import "./ItemCard.css";

const ItemCard = ({ item, onClick, bag }) => {
  function updateItem() {
    onClick(item.index);
  }

  return (
    <div className="itemCard" onClick={updateItem}>
      <img src={item.itemImgSrc} alt="item"></img>
    </div>
  );
};

export default ItemCard;
