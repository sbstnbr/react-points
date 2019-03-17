import scopa from './scopa';
import { defaultPlayers, scopaInitialState } from '../../constants/defaultValues';
import * as actions from '../../actions';

const defaultRound = {
  id: 0,
  // playerIdToServe: true,
  result: new Array(2).fill(0),
};
const stateWithARound = {
  ...scopaInitialState,
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
    expect(scopa(undefined, {})).toEqual(scopaInitialState);
  });

  it('should handle ROUND_SCOPA_ADD', () => {
    expect(scopa(scopaInitialState, actions.roundScopaAdd())).toEqual(stateWithARound);
  });

  it('should handle ROUND_SCOPA_POINT_ADD', () => {
    const expectedRound = { ...defaultRound };
    expectedRound.result[0] = 1;
    const expected = { ...scopaInitialState, rounds: [expectedRound] };
    expect(scopa(stateWithARound, actions.roundScopaPointAdd(0, 0))).toEqual(expected);
  });
  it('should handle ROUND_SCOPA_RESET', () => {
    const round = { ...defaultRound };
    round.result = [10, 0];
    const state = { ...scopaInitialState, rounds: [].concat(round) };
    expect(scopa(state, actions.roundScopaReset(0, 0))).toEqual(stateWithARound);
  });
  it('should handle FIRST_PLAYER_ID_TO_SERVE_SET', () => {
    const expected = {
      ...scopaInitialState,
      firstPlayerIdToServe: 1,
    };
    expect(scopa(scopaInitialState, actions.firstPlayerIdToServe(1))).toEqual(expected);
  });
});
