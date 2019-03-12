import players from './players';
import * as actions from '../actions';

const initialState = [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }];

describe('player reducers', () => {
  it('should have a default state', () => {
    expect(players(undefined, {})).toEqual(initialState);
  });

  it('should handle PLAYER_ADD', () => {
    expect(players([], actions.playerAdd())).toEqual([{ id: 0, name: 'Bro' }]);
    expect(players(initialState, actions.playerAdd())).toEqual([
      ...initialState,
      { id: 2, name: 'Bro' },
    ]);
  });

  it('should handle PLAYER_UPDATE', () => {
    expect(players(initialState, actions.playerUpdate(1, 'Bro'))).toEqual([
      { id: 0, name: 'Jess' },
      { id: 1, name: 'Bro' },
    ]);
  });
});
