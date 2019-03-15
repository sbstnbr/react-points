import * as types from '../constants/actionTypes';

export const playerAdd = (name = 'Bro') => ({
  type: types.PLAYER_ADD,
  name,
});

export const playerUpdate = (id, name) => ({
  type: types.PLAYER_UPDATE,
  id,
  name,
});

export const roundScopaAdd = () => ({
  type: types.ROUND_SCOPA_ADD,
});
