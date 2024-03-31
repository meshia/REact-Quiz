import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setQuestions, nextQuestion, previousQuestion } from '../redux/actions';
import { fetchQuestions } from '../services/questionsService';
import Question from '../components/Question';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

const QuizPage: React.FC = () => {
    const { questions, currentQuestionIndex,answers } = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=> {
        if(questions.length === 0) {
            const getData = async () => {
                const fetchedData = await fetchQuestions(); // fetch data from service
                dispatch(setQuestions(fetchedData));
            }
            getData();
        }
    }, []);

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    }

    const handlePreviousQuestion = () => {
        dispatch(previousQuestion());
    }

    const handleSubmit = () => {
        navigate('/score');
    }

    return (
        <div className='quiz-page'>
            <h1>Quiz</h1>
            <h2>Please Answer the Following Questions</h2>
            { currentQuestionIndex > 0 && <Button active={true} label="Previous Question" onClick={handlePreviousQuestion}/>}
            { currentQuestionIndex < questions.length-1 && <Button active={answers[currentQuestionIndex] !== undefined ? true : false} label="Next Question" onClick={handleNextQuestion}/>}
            { currentQuestionIndex === questions.length-1 && <Button active={answers[currentQuestionIndex] !== undefined ? true : false} label="Submit" onClick={handleSubmit}/>}
            { <Question question={questions[currentQuestionIndex]} /> }
        </div>
    )
}

export default QuizPage;