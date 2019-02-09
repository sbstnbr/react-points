import React from 'react';

import { shallow } from 'enzyme';
import Game from './Game';

const game = (
  <Game />
);

it('renders without crashing', () => {
  shallow(game);
});

it('should add new rounds', () => {
  const wrapper = shallow(game);
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  expect(wrapper.state().rounds.length).toEqual(3);
});

it('should set the game type', () => {
  const wrapper = shallow(game);
  const gameType = 'Wist';
  wrapper.instance().setGameType(gameType)();
  expect(wrapper.state().gameType).toEqual('Wist');
});

it('should add a new player', () => {
  const wrapper = shallow(game);
  // const gameType = 'Wist';
  wrapper.instance().addPlayer('Bro');
  expect(wrapper.state().players[2]).toEqual('Bro');
});
