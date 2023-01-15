import { useState, useEffect, useRef } from "react";

function useLogic() {
  const [startingTime, setStartingTime] = useState(5);
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleTimeChange(event) {
    event.preventDefault();
    setStartingTime(event.target.value);
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
    setWordCount(0);
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
    startingTime,
    handleTimeChange,
  };
}

export default useLogic;
