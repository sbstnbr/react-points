import reducers from './index';

describe('reducers', () => {
  it('should combine reducers', () => {
    expect(reducers(undefined, {})).toEqual({
      players: [{ id: 0, name: 'Jess' }, { id: 1, name: 'Seb' }],
    });
  });
});
