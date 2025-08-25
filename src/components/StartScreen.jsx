import Button from "./Button";
import "./StartScreen.css";

const StartScreen = () => {
  return (
    <div className="startScreen">
      <h1>Title</h1>
      <div className="photo"></div>
      <Button btnType={"big"} btnText={"Start"} />
    </div>
  );
};

export default StartScreen;
