import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScopaGame from './game/ScopaGame';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ScopaGame} />
        <Route path="/Scopa" component={ScopaGame} />
        <Route path="/Wist" component={ScopaGame} />
      </div>
    </Router>
  );
}
