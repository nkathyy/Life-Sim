import Button from "./Button";
import "./StartScreen.css";

const StartScreen = () => {
  return (
    <>
      <h1>Title</h1>
      <div className="photo"></div>
      <Button btnType={"big"} btnText={"Start"} />
    </>
  );
};

export default StartScreen;
