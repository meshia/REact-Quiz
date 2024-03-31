import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getScore } from '../redux/actions';
import { RootState } from '../redux/reducers';

const ScorePage: React.FC = () => {
    const dispatch = useDispatch();
    
    const { score } = useSelector((state: RootState) => state.quiz);

    useEffect(() =>{
        dispatch(getScore())
    },[])

    return (
        <div className='score-page'>
            <h2>Greate Work!</h2>
            <h1>{`Your Score is: ${ score }`}</h1>
        </div>
    )
}

export default ScorePage;