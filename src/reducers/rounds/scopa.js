import * as types from '../../constants/actionTypes';

const initialState = [];

const scopa = (state = initialState, action) => {
  switch (action.type) {
    case types.ROUND_SCOPA_ADD:
      return [
        ...state,
        {
          id: state.reduce((maxId, round) => Math.max(round.id, maxId), -1) + 1,
          // playerIdToServe: nextPlayerIdToServe,
          // result: new Array(players.length).fill(0),
        },
      ];
    default:
      return state;
  }
};

export default scopa;
