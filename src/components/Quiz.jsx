import { useState } from "react";
import questions from "../../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const isCompleted = userAnswers.length === questions.length;
  function handleSelectAnswer(answer) {
    setUserAnswers((prevState) => [...prevState, answer]);
  }

  if (isCompleted) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={quizCompleteImg} alt="quiz completed image" />
      </div>
    );
  }
  const shuffledAnswers = [
    ...questions[activeQuestionIndex].answers.sort(() => Math.random() - 0.5),
  ];
  return (
    <div id="quiz">
      <div id="question">
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, i) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <QuestionTimer></QuestionTimer>
    </div>
  );
}
