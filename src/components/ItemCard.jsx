import "./ItemCard.css";

const ItemCard = ({ itemImgSrc }) => {
  return (
    <div className="itemCard">
      <img src={itemImgSrc} alt="item"></img>
    </div>
  );
};

export default ItemCard;
