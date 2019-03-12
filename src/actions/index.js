import * as types from '../constants/actionTypes';

export const playerAdd = () => ({
  type: types.PLAYER_ADD,
  name: 'Bro',
});

export const playerUpdate = (id, name) => ({
  type: types.PLAYER_UPDATE,
  id,
  name,
});
