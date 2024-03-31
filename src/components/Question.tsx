import React, { useEffect, useState } from 'react';
import { QuestionType } from '../types/quizTypes';
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
    const [activeIndex, setActiveIndex] = useState<number | null>(null) 
    const dispatch = useDispatch();
    const { currentQuestionIndex, answers } = useSelector((state: RootState) => state.quiz);

    const handleAnswerSelect = (index: number) => {
        dispatch(selectAnswer(index));
        console.log("answers[currentQuestionIndex]", answers[currentQuestionIndex])
        setActiveIndex(index);
    }

    useEffect(() => {
        return setActiveIndex(null);
    },[])

    return (
        <StyledList className='question'>
            <h2>{ question?.question }</h2>
            <ul>
                { question?.answers.map((answer, index) => {
                    return <Answer key={ `${question?.id}-${answer.id}`} answer={answer} active={activeIndex === index ? true : false} onClick={()=>handleAnswerSelect(index)} />
                })}
            </ul>
        </StyledList>
    )
}

export default Question;