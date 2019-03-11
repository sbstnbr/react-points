import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScopaGame from './ScopaGame';
import WistGame from './WistGame';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ScopaGame} />
        <Route path="/Scopa" component={ScopaGame} />
        <Route path="/Wist" component={WistGame} />
      </div>
    </Router>
  );
}
