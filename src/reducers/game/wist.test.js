import wist from './wist';
import * as actions from '../../actions';
import { wistInitialState } from '../../constants/defaultValues';

describe('wist rounds reducers', () => {
  it('should have a default state', () => {
    expect(wist(undefined, {})).toEqual(wistInitialState);
  });
  it('should handle ROUND_WIST_ADD', () => {
    const excepted = {
      ...wistInitialState,
      rounds: [
        {
          id: 0,
          results: [],
          activeStep: 0,
        },
      ],
    };
    expect(wist(wistInitialState, actions.roundWistAdd())).toEqual(excepted);
  });
});
