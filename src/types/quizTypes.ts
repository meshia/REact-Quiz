
export enum ActionType {
    SET_QUESTIONS = 'SET_QUESTIONS',
    NEXT_QUESTION = 'NEXT_QUESTION',
    PREVIOUS_QUESTION = 'PREVIOUS_QUESTION',
    SELECT_ANSWER = 'SELECT_ANSWER',
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
    answers: {
        [key: string]: number
    };
}

interface SetQuestionsAction {
    [key: string]: any;
    type: typeof ActionType.SET_QUESTIONS;
    payload: QuestionType[];
}

interface NextQuestionAction {
    [key: string]: any;
    type: ActionType.NEXT_QUESTION;
  }

interface PreviousQuestionAction {
    [key: string]: any;
    type: ActionType.PREVIOUS_QUESTION;
}
  
interface SelectAnswerAction {
    [key: string]: any;
    type: ActionType.SELECT_ANSWER;
    answerIndex: number;
}

export type QuizAction = SetQuestionsAction | NextQuestionAction | PreviousQuestionAction | SelectAnswerAction;
  