import { QuizState } from "../types/quizTyes";

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
  };
  
  const quizReducer = (state = initialState, action: any) => {
    // Implement reducer logic based on action types
    return state;
  };
  
  export default quizReducer;