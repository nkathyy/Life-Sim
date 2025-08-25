import "./App.css";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <hr></hr>
      <div className="mainContainer">
        <div className="topBar">
          <div className="boxes left"></div>
          <h1>title</h1>
          <div className="boxes right">!</div>
        </div>
        <div className="content">
          <StartScreen />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
