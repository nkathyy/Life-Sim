import Button from "../components/Button";
import "./StartScreen.css";

const StartScreen = ({ startFunction }) => {
  return (
    <>
      <h1>Title</h1>
      <div className="photo"></div>
      <Button btnType={"big"} btnText={"Start"} onClick={startFunction} />
    </>
  );
};

export default StartScreen;
