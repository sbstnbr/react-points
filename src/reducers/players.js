import { PLAYER_ADD, PLAYER_UPDATE } from '../constants/actionTypes';

const initialState = [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }];

const players = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ADD:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          name: 'Bro',
        },
      ];
    case PLAYER_UPDATE:
      return state.map(player => (player.id === action.id ? { ...player, name: action.name } : player));
    default:
      return state;
  }
};

export default players;
