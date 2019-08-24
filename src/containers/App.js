import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameScopa from './Game/Scopa';
import GameWist from './Game/Wist';
import * as routes from '../constants/routes';

export default function App() {
  return (
    <Router>
      <div>
        <Route exact path={routes.HOME} component={GameScopa} />
        <Route path={routes.SCOPA} component={GameScopa} />
        <Route path={routes.WIST} component={GameWist} />
      </div>
    </Router>
  );
}
