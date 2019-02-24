import React from 'react';

import { createShallow } from '@material-ui/core/test-utils';

import ScopaGame from './ScopaGame';

const game = <ScopaGame />;
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
