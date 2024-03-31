
export const setQuestions = (questions) => ({
    type: 'SET_QUESTIONS',
    payload: questions,
});

export const setAnswer = (questionId, answerId) => ({
    type: 'SET_ANSWER',
    payload: { questionId, answerId }
});