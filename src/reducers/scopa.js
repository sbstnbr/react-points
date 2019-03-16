import * as types from '../constants/actionTypes';
import defaultPlayers from '../constants/defaultValues';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};

const scopa = (state = initialState, action) => {
  switch (action.type) {
    case types.ROUND_SCOPA_ADD:
      return Object.assign({}, state, {
        rounds: state.rounds.concat({
          id: state.rounds.reduce((maxId, round) => Math.max(round.id, maxId), -1) + 1,
          // playerIdToServe: nextPlayerIdToServe,
          result: new Array(state.players.length).fill(0),
        }),
      });
    case types.ROUND_SCOPA_POINT_ADD: {
      const newRounds = state.rounds.slice();
      newRounds[action.roundId].result[action.playerId] += 1;
      return { ...state, rounds: newRounds };
    }
    default:
      return state;
  }
};

export default scopa;
