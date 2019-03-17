import scopa from './scopa';
import { scopaInitialState } from '../../constants/defaultValues';
import * as actions from '../../actions';

const defaultRound = {
  id: 0,
  playerIdToServe: 0,
  result: new Array(2).fill(0),
};
const stateWithARound = {
  ...scopaInitialState,
  rounds: [
    {
      id: 0,
      playerIdToServe: 0,
      result: new Array(2).fill(0),
    },
  ],
};

describe('scopa rounds reducers', () => {
  it('should have a default state', () => {
    expect(scopa(undefined, {})).toEqual(scopaInitialState);
  });

  it('should handle ROUND_SCOPA_ADD for the first round', () => {
    const state = {
      ...scopaInitialState,
      firstPlayerIdToServe: 1,
    };
    const expectedRound = {
      ...defaultRound,
      playerIdToServe: 1,
    };
    const expectedState = {
      ...state,
      rounds: [expectedRound],
    };
    expect(scopa(state, actions.roundScopaAdd())).toEqual(expectedState);
  });

  it('should handle ROUND_SCOPA_ADD by incrementing the playerIdToServe', () => {
    const state = {
      ...scopaInitialState,
      rounds: [{ ...defaultRound, playerIdToServe: 0 }],
    };
    const expectedRound = {
      ...defaultRound,
      id: 1,
      playerIdToServe: 1,
    };
    const expectedState = {
      ...state,
      rounds: state.rounds.concat(expectedRound),
    };
    expect(scopa(state, actions.roundScopaAdd())).toEqual(expectedState);
  });

  it('should handle ROUND_SCOPA_ADD by reseting the playerIdToServe when greater than the number of players', () => {
    const state = {
      ...scopaInitialState,
      rounds: [
        { ...defaultRound, playerIdToServe: 0 },
        { ...defaultRound, id: 1, playerIdToServe: 1 },
      ],
    };
    const expectedRound = {
      ...defaultRound,
      id: 2,
      playerIdToServe: 0,
    };
    const expectedState = {
      ...state,
      rounds: state.rounds.concat(expectedRound),
    };
    expect(scopa(state, actions.roundScopaAdd())).toEqual(expectedState);
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
