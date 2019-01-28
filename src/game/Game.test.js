import React from 'react';

import Game from './Game';
import { shallow } from 'enzyme';

const game = <Game
  // name="Test"
// points={this.calculatePoints(id)}
// handleUpdatePlayerName={this.props.handleUpdatePlayerName}
// players={this.props.players}
// id={id}
// key={id}
  />

it('renders without crashing', () => {
  shallow(game);
});

it('should add new rounds', ()=> {
  const wrapper = shallow(game);
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  wrapper.instance().createRound();
  expect(wrapper.state().rounds.length).toEqual(3);
})

it('should set the game type', () => {
  const wrapper = shallow(game);
  const gameType = 'Wist';
  wrapper.instance().setGameType(gameType)();
  expect(wrapper.state().gameType).toEqual('Wist');
})

it('should add a new player', () => {
  const wrapper = shallow(game);
  // const gameType = 'Wist';
  wrapper.instance().addPlayer('Bro');
  expect(wrapper.state().players[2]).toEqual('Bro');
})

