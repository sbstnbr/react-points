import scopa from './scopa';
import * as actions from '../../actions';

const initialState = [];
const defaultRound = {
  id: true,
  playerIdToServe: true,
  result: new Array(2).fill(0),
};

describe('scopa rounds reducers', () => {
  it('should have a default state', () => {
    expect(scopa(undefined, {})).toEqual(initialState);
  });

  xit('should handle ROUND_SCOPA_ADD', () => {
    expect(scopa([], actions.roundScopaAdd())).toEqual([defaultRound]);
  });

  // it('should handle PLAYER_UPDATE', () => {
  //   expect(players(initialState, actions.playerUpdate(1, 'Bro'))).toEqual([
  //     { id: 0, name: 'Jess' },
  //     { id: 1, name: 'Bro' },
  //   ]);
  // });
});
