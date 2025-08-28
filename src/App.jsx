import { useState } from "react";
import "./App.css";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";
import MessageBox from "./components/MessageBox";

function App() {
  const [gameState, setGameState] = useState(0);
  // 0 = start state; 1 = game state; 2 = end

  const [isMsgOpen, setIsMsgOpen] = useState(false);
  const openMsgBox = () => {
    setIsMsgOpen(true);
  };

  const closeMsgBox = () => {
    setIsMsgOpen(false);
  };

  return (
    <div className="App">
      <MessageBox
        isMsgOpen={isMsgOpen}
        msg={`This is a test message for testing a long sentence. test`}
        closeWindow={closeMsgBox}
      />
      <hr></hr>
      <div className="mainContainer">
        <div className="topBar">
          <div className="boxes left"></div>
          <h1>title</h1>
          <div className="boxes right" onClick={openMsgBox}>
            !
          </div>
        </div>
        <div className="content">
          {gameState === 0 ? (
            <StartScreen
              startFunction={() => {
                setGameState(1);
              }}
            />
          ) : (
            <GameScreen />
          )}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
