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
export const roundScopaPointAdd = (roundId, playerId) => ({
  type: types.ROUND_SCOPA_POINT_ADD,
  roundId,
  playerId,
});
export const roundScopaReset = (roundId, playerId) => ({
  type: types.ROUND_SCOPA_RESET,
  roundId,
  playerId,
});

export const firstPlayerIdToServe = playerId => ({
  type: types.FIRST_PLAYER_ID_TO_SERVE_SET,
  playerId,
});

export const roundWistAdd = () => ({
  type: types.ROUND_WIST_ADD,
});
export const roundWistBetsIncrease = (roundId, playerId) => ({
  type: types.ROUND_WIST_BETS_INCREASE,
  roundId,
  playerId,
});
export const roundWistBetsDecrease = (roundId, playerId) => ({
  type: types.ROUND_WIST_BETS_DECREASE,
  roundId,
  playerId,
});
export const roundWistDonesInit = roundId => ({
  type: types.ROUND_WIST_DONES_INIT,
  roundId,
});
export const roundWistDonesIncrease = (roundId, playerId) => ({
  type: types.ROUND_WIST_DONES_INCREASE,
  roundId,
  playerId,
});
export const roundWistDonesDecrease = (roundId, playerId) => ({
  type: types.ROUND_WIST_DONES_DECREASE,
  roundId,
  playerId,
});
export const roundWistActiveStepSwitch = (roundId, step) => ({
  type: types.ROUND_WIST_ACTIVE_STEP_SWITCH,
  roundId,
  step,
});
