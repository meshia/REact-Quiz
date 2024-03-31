import { QuestionType } from '../types/quizTypes';

export const fetchQuestions = async (): Promise<QuestionType[]> => {
    try {
        const response = await fetch("../quizData.json");
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        return jsonData.questions as QuestionType[];
    } catch (err) {
        console.error('Error fetching data:', err);
        return [];
    }
};