import React from 'react';
import { AnswerType } from '../types/quizTypes';

interface Props {
    item: AnswerType
}

const Answer: React.FC<Props> = ({ item  }) => {
    return (
        <div className='answer'>

        </div>
    )
}

export default Answer;