import * as actions from './index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  describe('players', () => {
    it('should create a PLAYER_ADD action', () => {
      expect(actions.playerAdd()).toEqual({
        type: types.PLAYER_ADD,
        name: 'Bro',
      });
    });
    it('should create a PLATER_UPDATE action', () => {
      expect(actions.playerUpdate(0, 'Bro')).toEqual({
        type: types.PLAYER_UPDATE,
        id: 0,
        name: 'Bro',
      });
    });
  });
  describe('scopa', () => {
    it('should create a ROUND_SCOPA_ADD action', () => {
      expect(actions.roundScopaAdd()).toEqual({
        type: types.ROUND_SCOPA_ADD,
      });
    });
    it('should create a ROUND_SCOPA_POINT_ADD action', () => {
      expect(actions.roundScopaPointAdd(1, 2)).toEqual({
        type: types.ROUND_SCOPA_POINT_ADD,
        roundId: 1,
        playerId: 2,
      });
    });
    it('should create a ROUND_SCOPA_RESET action', () => {
      expect(actions.roundScopaReset(1, 2)).toEqual({
        type: types.ROUND_SCOPA_RESET,
        roundId: 1,
        playerId: 2,
      });
    });
    it('should create a FIRST_PLAYER_ID_TO_SERVE_SET action', () => {
      expect(actions.firstPlayerIdToServe(1)).toEqual({
        type: types.FIRST_PLAYER_ID_TO_SERVE_SET,
        playerId: 1,
      });
    });
  });
});
