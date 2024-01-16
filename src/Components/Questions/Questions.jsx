import { useDispatch, useSelector } from 'react-redux';
import QuestionList from './QuestionList/QuestionList'
import { fetchData } from '../../Actions/actions'
import { useState, useEffect } from 'react';

export default function Questions() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quiz);
  const [questions, setQuestions] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setQuestions(state.quiz.map((question) => {
      return {
        ...question,
        answers: shuffleArray([...question.answers]),
      };
    }));
  }, [state.quiz]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <QuestionList questions={questions}/>
    </div>
  )
}
