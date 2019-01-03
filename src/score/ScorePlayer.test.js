import React from 'react';

import ScorePlayer from './ScorePlayer';
import { shallow } from 'enzyme';

const scorePlayer = <ScorePlayer
  name="Test"
// points={this.calculatePoints(id)}
// handleUpdatePlayerName={this.props.handleUpdatePlayerName}
// players={this.props.players}
// id={id}
// key={id}
  />

it('renders without crashing', () => {
  shallow(scorePlayer);
});