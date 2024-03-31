import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers';
import { legacy_createStore as createStore } from 'redux';
import Question from './Question';


describe('Question Component', () => {
  test('renders question and answers elements', () => {
        const initialState = {
            questions: [],
            currentQuestionIndex: 0,
            answers: {},
            score: 0,
        };
        const question = {
        id: 1,
        question: "What is the capital of Belgium?",
        answers: [
          { "id": 1, "text": "Paris", "isCorrect": false },
          { "id": 2, "text": "London", "isCorrect": false },
          { "id": 3, "text": "Brussels", "isCorrect": true },
          { "id": 4, "text": "Rome", "isCorrect": false }
        ]
      };
    render(
        <Provider store={createStore(rootReducer, { house: initialState })}>
            <Question question={question} />
        </Provider>
    );
    expect(screen.getByText(question.question)).toBeInTheDocument();
    question.answers.forEach(answer => {
      expect(screen.getByText(answer.text)).toBeInTheDocument();
    });
  });
});