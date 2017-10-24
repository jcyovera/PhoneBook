
import { fromJS } from 'immutable';
import phoneBookReducer from '../reducer';

describe('phoneBookReducer', () => {
  it('returns the initial state', () => {
    expect(phoneBookReducer(undefined, {})).toEqual(fromJS({}));
  });
});
