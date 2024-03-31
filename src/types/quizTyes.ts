export interface Question {
    id: number,
    question: string,
    answers: Answer[],
}

export interface Answer {
    id: number,
    text: string,
    isCorrect: boolean
}

export interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    answers: Answer[];
}
  