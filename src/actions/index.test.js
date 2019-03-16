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
  describe('rounds', () => {
    it('should create a ROUND_SCOPA_ADD action', () => {
      expect(actions.roundScopaAdd()).toEqual({
        type: types.ROUND_SCOPA_ADD,
      });
    });
    it('should create a ROUND_SCOPA_POINT_ADD action', () => {
      expect(actions.roundScopaPointAdd(0, 1)).toEqual({
        type: types.ROUND_SCOPA_POINT_ADD,
        roundId: 0,
        playerId: 1,
      });
    });
  });
});
