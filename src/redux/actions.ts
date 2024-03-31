import { QuestionType, ActionType, QuizAction } from "../types/quizTypes";

export const setQuestions = (questions: QuestionType[]): QuizAction => ({
    type: ActionType.SET_QUESTIONS,
    payload: questions,
});

export const nextQuestion = (): QuizAction => ({
    type: ActionType.NEXT_QUESTION,
});

export const previousQuestion = (): QuizAction => ({
    type: ActionType.PREVIOUS_QUESTION,
});

export const selectAnswer  = ( answerIndex: number): QuizAction => ({
    type: ActionType.SELECT_ANSWER, answerIndex ,
});