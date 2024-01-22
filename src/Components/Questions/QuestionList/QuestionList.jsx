import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Answer from "../Answer/Answer";
import Question from "../Question/Question";
import Swal from "sweetalert2";

export default function QuestionList({ questions, currentQuestionIndex, setCurrentQuestionIndex }) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    setIsCorrect(questions[currentQuestionIndex].answers[index].isCorrect);
  };

  const handleClick = () => {
    if (selectedAnswerIndex === null) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: 'Please select an answer before proceeding.',
        confirmButtonText: "OK"
      });
      return;
    }

    if (isCorrect && selectedAnswerIndex !== null) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswerIndex(null);
      } else if (currentQuestionIndex === questions.length - 1 && isCorrect) {
        console.log('won');
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Your answer was wrong, want to start again?',
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          setCurrentQuestionIndex(0);
          setIsCorrect(false);
          setSelectedAnswerIndex(null);
        } else if (result.isDenied) {
          navigate('/');
          setIsCorrect(false);
          setSelectedAnswerIndex(null);
        }
      });
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
          <Question question={questions[currentQuestionIndex].question} id={questions[currentQuestionIndex].id} />
          <ul className="col-12 d-flex flex-wrap justify-content-center mt-3" >
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <li key={index} className="col-6 mt-5">
                <Answer
                  key={index}
                  answer={answer}
                  isSelected={index === selectedAnswerIndex}
                  handleAnswerClick={() => handleAnswerClick(index)}
                />
              </li>
            ))}
          </ul>
          <button onClick={handleClick}>Next</button>
        </div>
      )}
    </section>
  );
}
