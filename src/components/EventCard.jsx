import "./EventCard.css";

const EventCard = ({ title, onClick }) => {
  return (
    <div className="eventCard" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default EventCard;
