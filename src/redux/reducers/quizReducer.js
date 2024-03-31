
const initialState = {
    questions: [],
    answers: {},
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            };
        case 'SET_ANSWER':
            return {
                ...state,
                [action.payload]: action.payload.answerId
            }
        default:
            return state;
    }
}

export default quizReducer;