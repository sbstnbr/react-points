import React from 'react';

import { createShallow } from '@material-ui/core/test-utils';

import ScopaGame from './ScopaGame';

const game = <ScopaGame />;
const rounds = [{ id: 1, result: [3, 0] }, { id: 2, result: [5, 0] }];
let wrapper;
let shallow;

beforeEach(() => {
  shallow = createShallow({ dive: true });
  wrapper = shallow(game);
});

it.skip('should add new rounds', () => {
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  expect(wrapper.state().rounds.length).toEqual(3);
});

it.skip('calculates a player score by summing rounds', () => {
  expect(wrapper.instance().calculateTotalPoints(rounds, 0)).toEqual(8);
});
