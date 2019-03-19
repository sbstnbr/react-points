import wist from './wist';
import * as actions from '../../actions';
import { wistInitialState } from '../../constants/defaultValues';

describe('wist rounds reducers', () => {
  it('should have a default state', () => {
    expect(wist(undefined, {})).toEqual(wistInitialState);
  });
});
