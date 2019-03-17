import { defaultPlayers } from '../constants/defaultValues';
import scopaRounds from './rounds/scopa';
import players from './players';

const initialState = {
  rounds: [],
  players: defaultPlayers,
};

export const scopa = (state = initialState, action) => ({
  ...scopaRounds(state, action),
  players: players(state.players, action),
});

export const wist = (state = initialState, action) => state;
