import * as types from '../../constants/actionTypes';
import { defaultPlayers } from '../../constants/defaultValues';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};

const scopaRounds = (state = initialState, action) => {
  switch (action.type) {
    case types.ROUND_SCOPA_ADD:
      return {
        ...state,
        rounds: state.rounds.concat({
          id: state.rounds.reduce((maxId, round) => Math.max(round.id, maxId), -1) + 1,
          // playerIdToServe: nextPlayerIdToServe,
          result: new Array(state.players.length).fill(0),
        }),
      };
    case types.ROUND_SCOPA_POINT_ADD: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResult = round.result.map((result, id) => {
            if (id === action.playerId) {
              return result + 1;
            }
            return result;
          });
          return { ...round, result: newResult };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_SCOPA_RESET: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResult = round.result.map((result, id) => {
            if (id === action.playerId) {
              return 0;
            }
            return result;
          });
          return { ...round, result: newResult };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    default:
      return state;
  }
};

export default scopaRounds;
