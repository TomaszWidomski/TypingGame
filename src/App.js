import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }
    
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time reminaing: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
