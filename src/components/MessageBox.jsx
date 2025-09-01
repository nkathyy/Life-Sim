import "./MessageBox.css";

const MessageBox = ({ isMsgOpen, msg, boxType, updateDay, closeWindow }) => {
  return (
    isMsgOpen && (
      <div className="windowWrapper">
        <div className="msgBox">
          <div className="msgBoxBar ">
            <h2>{"Message"}</h2>
            <div
              className="boxes right"
              onClick={boxType === "dayChange" ? updateDay : closeWindow}
            >
              X
            </div>
          </div>
          <div className="msgContent">
            <p>{msg}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default MessageBox;
