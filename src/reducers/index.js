import players from './players';

const reducers = (state = {}, action) => ({
  players: players(state.players, action),
});

export default reducers;
