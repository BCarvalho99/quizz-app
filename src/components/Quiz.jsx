//Quizz View component
import React from "react";
import "./Quiz.css";

const Quizz = ({ questions, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="question">
        <div className="questionNum">
          <span>
            {currentQuestion + 1}/ {questions.length}
          </span>
        </div>
        <div className="questionText">
          {questions[currentQuestion].question}
        </div>
      </div>

      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => {
          return (
            <button key={text} onClick={() => handleAnswerClick(isCorrect)}>
              {text}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Quizz;
