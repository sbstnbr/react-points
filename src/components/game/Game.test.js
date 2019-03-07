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

// it('should add new rounds', () => {
//   wrapper.instance().createRound();
//   wrapper.instance().createRound();
//   wrapper.instance().createRound();
//   expect(wrapper.state().rounds.length).toEqual(3);
// });

// it('should create a wist round', () => {
//   wrapper.instance().createWistRound();
//   expect(wrapper.state().rounds.length).toEqual(1);
// });

it('should add a new player', () => {
  const expected = {
    id: 2,
    name: 'Bro',
  };
  wrapper.instance().addPlayer('Bro');
  expect(wrapper.state().players[2]).toEqual(expected);
});

it('should update a player name', () => {
  const expected = {
    id: 0,
    name: 'Tata',
  };
  wrapper.instance().updatePlayerName(0, 'Tata');
  expect(wrapper.state().players[0]).toEqual(expected);
});

// it('should add a point to a player in a round', () => {
//   const expected = {
//     id: 0,
//     result: [1, 0],
//   };
//   wrapper.instance().createRound();
//   wrapper.instance().addPoint(0, 0);
//   expect(wrapper.state().rounds[0]).toEqual(expected);
// });

// it('should reset a player point in a round', () => {
//   const expected = {
//     id: 0,
//     result: [0, 0],
//   };
//   wrapper.instance().createRound();
//   wrapper.instance().addPoint(0, 0);
//   wrapper.instance().addPoint(0, 0);
//   wrapper.instance().resetRound(0, 0);
//   expect(wrapper.state().rounds[0]).toEqual(expected);
// });
