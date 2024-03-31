import { ActionType, QuizState } from "../types/quizTypes";

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
  };
  
  const quizReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.SET_QUESTIONS:
            return {...state, questions: action.payload};
        case ActionType.NEXT_QUESTION:
            return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};
        case ActionType.PREVIOUS_QUESTION:
            return {...state, currentQuestionIndex: state.currentQuestionIndex - 1 };
        case ActionType.SELECT_ANSWER:
            return {
                ...state,
                answers: {...state.answers, [state.currentQuestionIndex]: action.answerIndex},
            };
        default:
        return state;
    }
  };
  
  export default quizReducer;