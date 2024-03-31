import { QuestionType, ActionType, QuizAction } from "../types/quizTypes";


export const setQuestions = (questions: QuestionType[]): QuizAction => ({
    type: ActionType.SET_CITIES,
    payload: questions,
});