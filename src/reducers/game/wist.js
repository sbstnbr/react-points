import * as types from '../../constants/actionTypes';
import { wistInitialState } from '../../constants/defaultValues';

const initialState = { ...wistInitialState };

const wist = (state = initialState, action) => {
  switch (action.type) {
    // case types.ROUND_SCOPA_ADD: {
    //   let playerIdToServe = state.firstPlayerIdToServe; // For first round
    //   if (state.rounds.length > 0) {
    //     const lastPlayerIdToServe = state.rounds[state.rounds.length - 1].playerIdToServe;
    //     playerIdToServe = lastPlayerIdToServe === state.players.length - 1 ? 0 : lastPlayerIdToServe + 1;
    //   }
    //   return {
    //     ...state,
    //     rounds: state.rounds.concat({
    //       id: state.rounds.reduce((maxId, round) => Math.max(round.id, maxId), -1) + 1,
    //       playerIdToServe,
    //       result: new Array(state.players.length).fill(0),
    //     }),
    //   };
    // }
    // case types.ROUND_SCOPA_POINT_ADD: {
    //   const newRounds = state.rounds.map((round) => {
    //     if (round.id === action.roundId) {
    //       const newResult = round.result.map((result, id) => {
    //         if (id === action.playerId) {
    //           return result + 1;
    //         }
    //         return result;
    //       });
    //       return { ...round, result: newResult };
    //     }
    //     return round;
    //   });
    //   return { ...state, rounds: newRounds };
    // }
    // case types.ROUND_SCOPA_RESET: {
    //   const newRounds = state.rounds.map((round) => {
    //     if (round.id === action.roundId) {
    //       const newResult = round.result.map((result, id) => {
    //         if (id === action.playerId) {
    //           return 0;
    //         }
    //         return result;
    //       });
    //       return { ...round, result: newResult };
    //     }
    //     return round;
    //   });
    //   return { ...state, rounds: newRounds };
    // }
    // case types.FIRST_PLAYER_ID_TO_SERVE_SET:
    //   return {
    //     ...state,
    //     firstPlayerIdToServe: action.playerId,
    //   };
    default:
      return state;
  }
};

export default wist;
