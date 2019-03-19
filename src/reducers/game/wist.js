import * as types from '../../constants/actionTypes';
import { wistInitialState } from '../../constants/defaultValues';

const initialState = { ...wistInitialState };

const wist = (state = initialState, action) => {
  switch (action.type) {
    case types.ROUND_WIST_ADD: {
      return {
        ...state,
        rounds: state.rounds.concat({
          id: state.rounds.reduce((maxId, round) => Math.max(round.id, maxId), -1) + 1,
          results: Array.from(Array(state.players.length).keys()).map(playerId => ({
            playerId,
            bets: 0,
            dones: undefined,
          })),
          activeStep: 0,
        }),
      };
    }
    case types.ROUND_WIST_BETS_INCREASE: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResults = round.results.map((result, id) => {
            if (id === action.playerId) {
              return {
                ...result,
                bets: result.bets + 1,
              };
            }
            return result;
          });
          return { ...round, results: newResults };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_WIST_BETS_DECREASE: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResults = round.results.map((result, id) => {
            if (id === action.playerId) {
              return {
                ...result,
                bets: result.bets - 1,
              };
            }
            return result;
          });
          return { ...round, results: newResults };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_WIST_DONES_INIT: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResults = round.results.map(result => ({
            ...result,
            dones: 0,
          }));
          return { ...round, results: newResults };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_WIST_DONES_INCREASE: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResults = round.results.map((result, id) => {
            if (id === action.playerId) {
              return {
                ...result,
                dones: result.dones + 1,
              };
            }
            return result;
          });
          return { ...round, results: newResults };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_WIST_DONES_DECREASE: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          const newResults = round.results.map((result, id) => {
            if (id === action.playerId) {
              return {
                ...result,
                dones: result.dones - 1,
              };
            }
            return result;
          });
          return { ...round, results: newResults };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    case types.ROUND_WIST_ACTIVE_STEP_SWITCH: {
      const newRounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
          return {
            ...round,
            activeStep: round.activeStep === 0 ? 1 : 0,
          };
        }
        return round;
      });
      return { ...state, rounds: newRounds };
    }
    default:
      return state;
  }
};

export default wist;
