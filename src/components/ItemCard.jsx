import "./ItemCard.css";

const ItemCard = ({ itemImgSrc, itemIndex, onClick }) => {
  function updateItem() {
    onClick(itemIndex);
  }

  return (
    <div className="itemCard" onClick={updateItem}>
      <img src={itemImgSrc} alt="item"></img>
    </div>
  );
};

export default ItemCard;
