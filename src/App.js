// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={QuizPage} />
          <Route exact path="/score" component={ScorePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
