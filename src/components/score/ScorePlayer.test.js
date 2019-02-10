import React from 'react';

import { shallow } from 'enzyme';
import ScorePlayer from './ScorePlayer';

const scorePlayer = (
  <ScorePlayer
    name="Test"
  />
);

it('renders without crashing', () => {
  shallow(scorePlayer);
});
