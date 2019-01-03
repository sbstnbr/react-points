import React from 'react';

import Score from './Score';
import { shallow } from 'enzyme';

const score = <Score
    players={["Jess","Seb"]}
    rounds={[
      {id:1, result:[3,0]},
      {id:2, result:[5,0]},
    ]}
  />

it('renders without crashing', () => {
  shallow(score);
});

it('calculates a player score by summing rounds', () => {
  const wrapper = shallow(score);
  expect(wrapper.instance().calculatePoints(0)).toEqual(8);
});