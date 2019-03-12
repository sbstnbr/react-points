const initialState = [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }];

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER::UPDATE_NAME':
      return state.map(player => (player.id === action.id ? { ...player, name: action.name } : player));
    default:
      return state;
  }
};

export default players;
