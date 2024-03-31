import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setQuestions } from '../redux/actions';
import { fetchQuestions } from '../services/questionsService';

const QuizPage: React.FC = () => {
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(questions.length === 0) {
            const getData = async () => {
                const fetchedData = await fetchQuestions(); // fetch data from service
                console.log("fetchedData", fetchedData)
                dispatch(setQuestions(fetchedData));
            }
            getData();
        }
    }, []);

    return (
        <div className='quiz-page'>
            <h1>QuizPage</h1>
        </div>
    )
}

export default QuizPage;