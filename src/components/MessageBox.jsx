import "./MessageBox.css";

const MessageBox = ({ isMsgOpen, msg, closeWindow }) => {
  return (
    <div
      className="windowWrapper"
      style={{ display: isMsgOpen ? "flex" : "none" }}
    >
      <div className="msgBox">
        <div className="msgBoxBar ">
          <h2>{"Message"}</h2>
          <div className="boxes right" onClick={closeWindow}>
            X
          </div>
        </div>
        <div className="msgContent">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
