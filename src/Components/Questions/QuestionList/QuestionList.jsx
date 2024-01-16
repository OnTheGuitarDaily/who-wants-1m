import { useState } from "react";
import Answer from "../Answer/Answer";
import Question from "../Question/Question";

export default function QuestionList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(false);

  const handleClick = (status) => {
    const isCorrect = status;

    if (isCorrect) {
      setAnswer(true);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswer(false); 
      } else {
        console.log('All questions answered'); 
      }
    } else {
      console.log('Wrong!');
    }
  };

  return (
    <section>
      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div key={questions[currentQuestionIndex].id}>
          <Question question={questions[currentQuestionIndex].question} />
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <Answer
              key={index}
              answer={answer}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </section>
  );
}
