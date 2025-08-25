import EventCard from "./EventCard";
import "./GameScreen.css";

const GameScreen = () => {
  return (
    <>
      <div className="charContainer"></div>
      <div className="eventContainer">
        <EventCard title={"Sample"} />
        <EventCard title={"例子"} />
        <EventCard title={"例子"} />
        <EventCard title={"Sample"} />
      </div>
    </>
  );
};

export default GameScreen;
