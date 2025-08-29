import Button from "./Button";
import "./DetailCard.css";

const DetailCard = ({ style, item, closeWindow, updateDailyWorkStat }) => {
  return (
    <div className="cardWrapper" style={style}>
      <div className="card">
        <img src={item.imgSrc} alt="item logo" className="cardImg" />
        <h2>{item.displayName}</h2>
        <p>{item.description}</p>
        <div className="cardButtons">
          <Button
            btnType={"small"}
            btnText={"test"}
            onClick={updateDailyWorkStat}
          />
          <Button btnType={"small"} btnText={"Cancel"} onClick={closeWindow} />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
