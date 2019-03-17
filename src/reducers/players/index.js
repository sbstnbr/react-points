import { PLAYER_ADD, PLAYER_UPDATE } from '../../constants/actionTypes';
import { defaultPlayers } from '../../constants/defaultValues';

const initialState = defaultPlayers;

const players = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ADD:
      return [
        ...state,
        {
          id: state.reduce((maxId, player) => Math.max(player.id, maxId), -1) + 1,
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
