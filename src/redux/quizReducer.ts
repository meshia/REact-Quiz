import { ActionType, AnswerType, QuizState } from "../types/quizTypes";

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
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
                answers: {...state.answers, [state.currentQuestionIndex]: action.answer},
            };
        case ActionType.CALCULATE_SCORE:
            const answersArr = Object.values(state.answers);
            const totalAnswers = answersArr.length;
            const correctAnswers = answersArr.filter((answer:AnswerType) => answer.isCorrect).length;
            return {
                ...state,
                score: totalAnswers === 0 ? 0 : (correctAnswers / totalAnswers) * 100,
            };
        default:
            return state;
    }
  };
  
  export default quizReducer;