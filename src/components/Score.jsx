//Score View component
import React from "react";
import "./Score.css";
function Score({ resetHandleClick, score }) {
  return (
    <div>
      <p>You scored {score} of !!</p>
      <button onClick={resetHandleClick}>Reset Quizz</button>
    </div>
  );
}

export default Score;
