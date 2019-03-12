import players from './players';

const initialState = [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }];

describe('player reducers', () => {
  it('should have a default state', () => {
    expect(players(undefined, {})).toEqual(initialState);
  });

  it('should handle PLAYER::ADD', () => {
    expect(
      players([], {
        type: 'PLAYER::ADD',
      }),
    ).toEqual([{ id: 0, name: 'Bro' }]);
    expect(
      players(initialState, {
        type: 'PLAYER::ADD',
      }),
    ).toEqual([...initialState, { id: 2, name: 'Bro' }]);
  });

  it('should handle PLAYER::UPDATE_NAME', () => {
    expect(
      players(initialState, {
        type: 'PLAYER::UPDATE_NAME',
        id: 1,
        name: 'Bro',
      }),
    ).toEqual([{ id: 0, name: 'Jess' }, { id: 1, name: 'Bro' }]);
  });
});
