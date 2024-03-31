import React from 'react';
import { Answer } from '../types/quizTyes';

interface Props {
    item: Answer
}

const Answer: React.FC<Props> = ({ item  }) => {
    return (
        <div className='answer'>

        </div>
    )
}

export default Answer;