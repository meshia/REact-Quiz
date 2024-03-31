import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={QuizPage} />
            <Route path="/score" Component={ScorePage} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
