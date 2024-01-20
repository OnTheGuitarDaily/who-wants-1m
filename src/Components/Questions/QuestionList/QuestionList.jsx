import { useState } from "react";
import Answer from "../Answer/Answer";
import Question from "../Question/Question";

export default function QuestionList({ questions, currentQuestionIndex, setCurrentQuestionIndex }) {
  const [answer, setAnswer] = useState(false);

  const handleClick = (status) => {
    const isCorrect = status;

    if (isCorrect) {
      setAnswer(true);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } 
    } else {
      setCurrentQuestionIndex(0)
      setAnswer(false)
    }
  };

  return (
    <section>
      {questions.length === 0 ? (
       <div className="my-5 col-12 d-flex justify-content-center p-2 py-5">
        <h1>Loading...</h1>
      </div>
      ) : (
        <div key={questions[currentQuestionIndex].id} className="QuestionList">
          <Question question={questions[currentQuestionIndex].question} />
          <ol>
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <li key={index}>
                      <Answer
                      key={index}
                      answer={answer}
                      handleClick={handleClick}
                      />
                  </li>
              ))}
          </ol>
        </div>
      )}
    </section>
  );
}
