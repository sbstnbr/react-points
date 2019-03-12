import players from './players';
import { PLAYER_ADD, PLAYER_UPDATE } from '../constants/actionTypes';

const initialState = [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }];

describe('player reducers', () => {
  it('should have a default state', () => {
    expect(players(undefined, {})).toEqual(initialState);
  });

  it('should handle PLAYER_ADD', () => {
    expect(
      players([], {
        type: PLAYER_ADD,
      }),
    ).toEqual([{ id: 0, name: 'Bro' }]);
    expect(
      players(initialState, {
        type: PLAYER_ADD,
      }),
    ).toEqual([...initialState, { id: 2, name: 'Bro' }]);
  });

  it('should handle PLAYER_UPDATE', () => {
    expect(
      players(initialState, {
        type: PLAYER_UPDATE,
        id: 1,
        name: 'Bro',
      }),
    ).toEqual([{ id: 0, name: 'Jess' }, { id: 1, name: 'Bro' }]);
  });
});
