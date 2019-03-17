import { defaultPlayers } from '../constants/defaultValues';
import scopaGame from './game/scopa';
import players from './players';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};

export const scopa = (state = initialState, action) => ({
  ...scopaGame(state, action),
  players: players(state.players, action),
});

export const wist = (state = initialState, action) => state;
