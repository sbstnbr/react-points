import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './game/Game';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Game} />
        <Route path="/Scopa" component={Game} />
        <Route path="/Wist" component={Game} />
      </div>
    </Router>
  );
}
