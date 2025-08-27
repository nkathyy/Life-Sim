import "./Button.css";

const Button = ({ btnType, btnText, onClick }) => {
  return (
    <button className={btnType} onClick={onClick}>
      {btnType === "big" ? <h3>{btnText}</h3> : <h4>{btnText}</h4>}
    </button>
  );
};

export default Button;
