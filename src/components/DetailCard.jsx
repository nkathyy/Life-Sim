import Button from "./Button";
import "./DetailCard.css";

const DetailCard = ({
  style,
  itemImgSrc,
  itemName,
  itemDescription,
  onClick,
}) => {
  return (
    <div className="cardWrapper" style={style}>
      <div className="card">
        <img src={itemImgSrc} alt="item logo" className="cardImg" />
        <h2>{itemName}</h2>
        <p>{itemDescription}</p>
        <div className="cardButtons">
          <Button btnType={"small"} btnText={"test"} onClick={() => {}} />
          <Button btnType={"small"} btnText={"Cancel"} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
