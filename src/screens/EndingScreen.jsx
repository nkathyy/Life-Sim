import "./EndingScreen.css";
import Button from "../components/Button";
import { endingData } from "../constants/endingData";

const EndingScreen = ({ retryFunction, endingIndex }) => {
  return (
    <>
      <div className="EndingImg"></div>
      <div className="endingDesc">
        <h2>{endingData[endingIndex].endingName}</h2>
        <p>{endingData[endingIndex].description}</p>
      </div>
      <Button btnType={"big"} btnText={"Retry"} onClick={retryFunction} />
    </>
  );
};

export default EndingScreen;
