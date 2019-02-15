import React from 'react';

import { shallow } from 'enzyme';
import ScorePlayer from './ScorePlayer';

const scorePlayer = (
  <ScorePlayer player={{ id: 0, name: 'Test' }} points={0} handleUpdatePlayerName={() => null} />
);

it('renders without crashing', () => {
  shallow(scorePlayer);
});
