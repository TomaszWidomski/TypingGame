import React from "react";
import useLogic from "./useLogic.js";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
    startingTime,
    handleTimeChange,
  } = useLogic();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <label for="playingTime">Enter your playing time here: </label>

      <input
        type="text"
        id="playingTime"
        value={startingTime}
        onChange={handleTimeChange}
      ></input>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
