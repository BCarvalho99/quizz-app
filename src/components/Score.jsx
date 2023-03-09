//Score View component
import React from "react";
import "./Score.css";
function Score({ resetHandleClick, score, questions }) {
  return (
    <div>
      <p>
        You scored {score} of {questions.length}!!
      </p>
      <button onClick={resetHandleClick}>Reset Quizz</button>
    </div>
  );
}

export default Score;
