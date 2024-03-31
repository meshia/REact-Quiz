import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={QuizPage} />
          <Route path="/score" Component={ScorePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
