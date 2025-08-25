import "./EventCard.css";

const EventCard = ({ title, onClick }) => {
  return (
    <div className="eventCard">
      <h2>{title}</h2>
    </div>
  );
};

export default EventCard;
