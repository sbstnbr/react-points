import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameScopa from './Game/Scopa';
import GameWist from './Game/Wist';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={GameScopa} />
        <Route path="/Scopa" component={GameScopa} />
        <Route path="/Wist" component={GameWist} />
      </div>
    </Router>
  );
}
