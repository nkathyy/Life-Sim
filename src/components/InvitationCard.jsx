import Button from "./Button";
import "./InvitationCard.css";

const InvitationCard = ({
  isBoxOpen,
  item,
  closeWindow,
  updateDailyWorkStat,
}) => {
  return (
    isBoxOpen && (
      <div className="cardWrapper">
        <div className="invCard">
          <h2>Invitation</h2>
          <p>{item.dateDescription}</p>
          <div className="cardButtons">
            <Button
              btnType={"cardBtn"}
              btnText={item.choices[0].choiceName}
              onClick={() => {}}
            />
            <Button
              btnType={"cardBtn"}
              btnText={item.choices[1].choiceName}
              onClick={closeWindow}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default InvitationCard;
