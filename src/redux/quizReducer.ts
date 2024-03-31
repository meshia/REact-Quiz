import { QuizState } from "../types/quizTypes";

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
  };
  
  const quizReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_CITIES":
            return {...state, questions: action.payload};
        default:
        return state;
    }
  };
  
  export default quizReducer;