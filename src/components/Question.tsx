import React from 'react';
import { Question } from '../types/quizTyes';

interface Props {
    item: Question
}

const Question: React.FC<Props> = ({ item  }) => {
    return (
        <div className='question'>

        </div>
    )
}

export default Question;