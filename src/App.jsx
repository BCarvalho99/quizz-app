import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const questions = [
    {
      question: "What is the biggest continent in the world?",
      answers: [
        { text: "Asia", isCorrect: true },
        { text: "Europe" },
        { text: "America" },
        { text: "Amazonia" },
      ],
    },
    {
      question: "Where is Japan located?",
      answers: [
        { text: "East Asia", isCorrect: true },
        { text: "West Asia" },
        { text: "Africa" },
        { text: "Cuiaba" },
      ],
    },
    {
      question: "Where is Iceland located?",
      answers: [
        { text: "East Asia" },
        { text: "Santa Catarina" },
        { text: "Europe", isCorrect: true },
        { text: "America" },
      ],
    },
    {
      question: "Total number of oceans in the World is",
      answers: [{ text: "7" }, { text: "6" }, { text: "5", isCorrect: true }],
    },
    {
      question: "Where is Cristo Redentor located?",
      answers: [
        { text: "Rio de Janeiro", isCorrect: true },
        { text: "Lisboa" },
        { text: "New York" },
        { text: "Moscovo" },
      ],
    },
    {
      question: "What is the capital of Portugal?",
      answers: [
        { text: "Porto" },
        { text: "Lisboa", isCorrect: true },
        { text: "Brasilia" },
        { text: "Dublin" },
      ],
    },
    {
      question:
        "Choose the folklore animal that represents Barcelos in Portugal",
      answers: [
        { text: "Urso de Barcelos" },
        { text: "Galo de Barcelos", isCorrect: true },
        { text: "Tubarão do rio" },
        { text: "Harpia Brasileira" },
      ],
    },
    {
      question: "What is the capital of Spain?",
      answers: [
        { text: "Paranabiacaba" },
        { text: "Madrid", isCorrect: true },
        { text: "Barcelona" },
        { text: "London" },
      ],
    },
  ];

  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    //checking the score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;

    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const resetHandleClick = () => {
    setCurrentQuestion(0);
    setIsQuizOver(false);
    setScore(0);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <Score resetHandleClick={resetHandleClick} score={score} />
      ) : (
        <Quiz
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
