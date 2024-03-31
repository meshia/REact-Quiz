import React, {useEffect} from 'react';
import { AnswerType } from '../types/quizTypes';
import styled from 'styled-components';

const StyledListItem = styled.li`
    display: flex;
    padding: .5em;
    margin: .5em;
    border-radius: .5em;
    border-bottom: 0.2em solid var(--primary-color);
    cursor: pointer;
    transition: padding ease 0.2s;
    &:hover {
        padding: 1em;
    }
    &.active {
        background-color: var(--secondary-color);
    }
`;

interface Props {
    answer: AnswerType,
    active: boolean,
    onClick: () => void
}

const Answer: React.FC<Props> = ({ answer, active, onClick  }) => {
    return (
        <StyledListItem className={`answer ${active ? 'active' : ''}`} onClick={onClick} >
            { answer.text }
        </StyledListItem>
    )
}

export default Answer;