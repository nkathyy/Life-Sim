import "./Button.css";

const Button = ({ btnType, btnText, onClick }) => {
  return (
    <button className={btnType} onClick={onClick}>
      <h3>{btnText}</h3>
    </button>
  );
};

export default Button;
