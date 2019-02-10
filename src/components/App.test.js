import React from 'react';

import { shallow } from 'enzyme';
import App from './App';

const app = <App />;

it('renders without crashing', () => {
  shallow(app);
});

it('should add new rounds', () => {
  const wrapper = shallow(app);
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  expect(wrapper.state().rounds.length).toEqual(3);
});

it('should reset the game', () => {
  const wrapper = shallow(app);
  const gameType = 'Wist';
  wrapper.instance().resetGame(gameType);
  expect(wrapper.state().gameType).toEqual('Wist');
});

it('should add a new player', () => {
  const wrapper = shallow(app);
  // const gameType = 'Wist';
  wrapper.instance().addPlayer('Bro');
  expect(wrapper.state().players[2]).toEqual('Bro');
});
