import scopa from './scopa';
import defaultPlayers from '../constants/defaultValues';
import * as actions from '../actions';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};
const defaultRound = {
  id: 0,
  // playerIdToServe: true,
  result: new Array(2).fill(0),
};

describe('scopa rounds reducers', () => {
  it('should have a default state', () => {
    expect(scopa(undefined, {})).toEqual(initialState);
  });

  it('should handle ROUND_SCOPA_ADD', () => {
    const expected = { ...initialState, rounds: [defaultRound] };
    expect(scopa(undefined, actions.roundScopaAdd())).toEqual(expected);
  });

  // it('should handle PLAYER_UPDATE', () => {
  //   expect(players(initialState, actions.playerUpdate(1, 'Bro'))).toEqual([
  //     { id: 0, name: 'Jess' },
  //     { id: 1, name: 'Bro' },
  //   ]);
  // });
});
