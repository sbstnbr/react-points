import React from 'react';

import { shallow } from 'enzyme';
import Score from './Score';

const scorePlayer = (
  <Score player={{ id: 0, name: 'Test' }} points={0} handleUpdatePlayerName={() => null} />
);

it('renders without crashing', () => {
  shallow(scorePlayer);
});
