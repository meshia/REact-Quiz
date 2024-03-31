import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setQuestions, nextQuestion, previousQuestion } from '../redux/actions';
import { fetchQuestions } from '../services/questionsService';
import Question from '../components/Question';
import Button from '../components/Button';

const QuizPage: React.FC = () => {
    const { questions, currentQuestionIndex,answers } = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();

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

    return (
        <div className='quiz-page'>
            <h1>QuizPage</h1>
            { currentQuestionIndex > 0 && <Button active={true} label="Previous Question" onClick={handlePreviousQuestion}/>}
            { currentQuestionIndex < questions.length && <Button active={answers[currentQuestionIndex] !== undefined ? true : false} label="Next Question" onClick={handleNextQuestion}/>}
            { <Question question={questions[currentQuestionIndex]} /> }
            { currentQuestionIndex === questions.length && <Button active={true} label="Submit" onClick={()=> console.log("DONE!")}/>}
        </div>
    )
}

export default QuizPage;