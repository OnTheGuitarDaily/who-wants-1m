import { useDispatch, useSelector } from 'react-redux';
import QuestionList from './QuestionList/QuestionList'
import Nav from '../Nav/Nav';
import { fetchData, setWinnigPrize } from '../../Actions/actions'
import { useState, useEffect } from 'react';


export default function Questions() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.game.quiz);
  const winningPrize = useSelector((state) => state.game.winningPrize);
  const [questions, setQuestions] = useState([]);
  const [prize, setPrize] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setPrize(winningPrize)
    setQuestions(quiz.map((question) => {
      return {
        ...question,
        answers: shuffleArray([...question.answers]),
      };
    }));
  }, [quiz, winningPrize]);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(setWinnigPrize());
  }, []);

  return (
    <>
    <Nav currentQuestionIndex={currentQuestionIndex} prize={prize}/>
    <QuestionList 
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
    />
    
    </>
  )
}
