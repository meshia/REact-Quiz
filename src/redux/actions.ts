import { QuestionType, ActionType, QuizAction, AnswerType } from "../types/quizTypes";

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

export const selectAnswer  = ( answer: AnswerType): QuizAction => ({
    type: ActionType.SELECT_ANSWER, answer ,
});

export const getScore = (): QuizAction => ({
    type: ActionType.CALCULATE_SCORE,
});