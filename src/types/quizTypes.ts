
export enum ActionType {
    SET_CITIES = 'SET_CITIES',
}
export interface QuestionType {
    id: number,
    question: string,
    answers: AnswerType[],
}

export interface AnswerType {
    id: number,
    text: string,
    isCorrect: boolean
}

export interface QuizState {
    questions: QuestionType[];
    currentQuestionIndex: number;
    answers: AnswerType[];
}

interface SetQuestionsAction {
    type: typeof ActionType.SET_CITIES;
    payload: QuestionType[];
    [key: string]: any;
}

export type QuizAction = SetQuestionsAction ;
  