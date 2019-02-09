import React from 'react';

import { shallow } from 'enzyme';
import Score from './Score';

const rounds = [{ id: 1, result: [3, 0] }, { id: 2, result: [5, 0] }];

const score = <Score players={['Jess', 'Seb']} rounds={rounds} />;

it('renders without crashing', () => {
  shallow(score);
});

it('calculates a player score by summing rounds', () => {
  const wrapper = shallow(score);
  expect(wrapper.instance().calculatePoints(rounds, 0)).toEqual(8);
});
