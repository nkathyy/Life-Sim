import { useState } from "react";
import "./App.css";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";
import MessageBox from "./components/MessageBox";
import EndingScreen from "./screens/EndingScreen";
import { systemStat } from "./constants/systemStat.js";

function App() {
  const [gameState, setGameState] = useState(2);
  // 0 = start state; 1 = game state; 2 = end

  const [gameSystemData, setGameSystemData] = useState(systemStat);

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
          <h1>
            {gameState === 0
              ? "Start"
              : gameState === 1
              ? `Day ${gameSystemData.day}`
              : `Ending ${gameSystemData.ending + 1}`}
          </h1>
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
          ) : gameState === 1 ? (
            <GameScreen
              gameSystemData={gameSystemData}
              updateSystemData={setGameSystemData}
              toEndingFunction={() => {
                setGameState(2);
              }}
            />
          ) : (
            <EndingScreen
              retryFunction={() => {
                setGameState(0);
              }}
              endingIndex={gameSystemData.ending}
            />
          )}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
