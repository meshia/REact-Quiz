import React from 'react';
import { QuestionType, AnswerType } from '../types/quizTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { selectAnswer } from '../redux/actions';
import Answer from './Answer';
import styled from 'styled-components';

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    h2 { 
        color: var(--primary-color);
    }
`;

interface Props {
    question: QuestionType
}

const Question: React.FC<Props> = ({ question  }) => { 
    const dispatch = useDispatch();
    const { currentQuestionIndex = 0, answers } = useSelector((state: RootState) => state.quiz);
    const handleAnswerSelect = (answer: AnswerType) => {
        dispatch(selectAnswer(answer));
    }

    return (
        <StyledList className='question'>
            <h2>{ question?.question }</h2>
            <ul>
                { question?.answers.map((answer, index) => {
                    return <Answer key={ `${question?.id}-${answer.id}`}
                                   answer={answer}
                                   active={answers[currentQuestionIndex]?.id === index+1 ? true : false}
                                   onClick={()=>handleAnswerSelect(answer)} />
                })}
            </ul>
        </StyledList>
    )
}

export default Question;