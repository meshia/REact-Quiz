import React from 'react';
import { render, screen } from '@testing-library/react';
import Answer from './Answer';

describe('Answer Component', () => {
    test('renders item details correctly', () => {
      const answer = {
        id: 1,
        text: "Paris",
        isCorrect: false
    }
  
      render(<Answer answer={answer} active={ true } onClick={()=> console.log("CLICKED")}/>);
      // Assert that item details are rendered correctly
      expect(screen.getByText(answer.text)).toBeInTheDocument();
    });
  });