import * as actions from './index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
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
