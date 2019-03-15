import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import Game from './Game';

const game = <Game gameType="Scopa" increaseNbPlayers={jest.fn()} />;
let wrapper;
let shallow;

beforeEach(() => {
  shallow = createShallow({ dive: true });
  wrapper = shallow(game);
});

xit('should update open in state', () => {
  wrapper.instance().toggleDrawer(true);
  expect(wrapper.state().open.toBeTruthy);
});
