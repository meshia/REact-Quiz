import React from 'react';
import { QuestionType } from '../types/quizTypes';

interface Props {
    item: QuestionType
}

const Question: React.FC<Props> = ({ item  }) => {
    return (
        <div className='question'>

        </div>
    )
}

export default Question;