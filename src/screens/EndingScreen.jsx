import "./EndingScreen.css";
import Button from "../components/Button";

const EndingScreen = ({ retryFunction }) => {
  return (
    <>
      <div className="EndingImg"></div>
      <div className="endingDesc">
        <p>Ending Description Ending Description Ending Description 123123</p>
      </div>
      <Button btnType={"big"} btnText={"Retry"} onClick={retryFunction} />
    </>
  );
};

export default EndingScreen;
