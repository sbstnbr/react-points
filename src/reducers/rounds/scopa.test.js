import scopa from './scopa';
import defaultPlayers from '../../constants/defaultValues';
import * as actions from '../../actions';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};
const defaultRound = {
  id: 0,
  // playerIdToServe: true,
  result: new Array(2).fill(0),
};
const stateWithARound = {
  ...initialState,
  rounds: [
    {
      id: 0,
      // playerIdToServe: true,
      result: new Array(2).fill(0),
    },
  ],
};

describe('scopa rounds reducers', () => {
  it('should have a default state', () => {
    expect(scopa(undefined, {})).toEqual(initialState);
  });

  it('should handle ROUND_SCOPA_ADD', () => {
    expect(scopa(initialState, actions.roundScopaAdd())).toEqual(stateWithARound);
  });

  it('should handle ROUND_SCOPA_POINT_ADD', () => {
    const expectedRound = { ...defaultRound };
    expectedRound.result[0] = 1;
    const expected = { ...initialState, rounds: [expectedRound] };
    expect(scopa(stateWithARound, actions.roundScopaPointAdd(0, 0))).toEqual(expected);
  });
  it('should handle ROUND_SCOPA_RESET', () => {
    const round = { ...defaultRound };
    round.result = [10, 0];
    const state = { ...initialState, rounds: [].concat(round) };
    expect(scopa(state, actions.roundScopaReset(0, 0))).toEqual(stateWithARound);
  });
});
