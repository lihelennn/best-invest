import { fromJS } from 'immutable';
import moment from 'moment';

import {
  ADD_SYMBOL,
  UPDATE_SYMBOL,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
} from './constants';

export const initialState = fromJS({
  symbol: [],
  start_moment: moment(),
  start_date: "",
  end_moment: moment(),
  end_date: "",
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SYMBOL:
      var copy = state.get('symbol').concat([action.symbol])
      return state.set('symbol', copy);
    case UPDATE_SYMBOL:
      return state.set('symbol', action.symbol);

    case UPDATE_START_DATE:
      var formatted = action.start_date.format().slice(0,10);
      state = state.set('start_moment', action.start_date);
      return state.set('start_date', formatted);
    case UPDATE_END_DATE:
      var formatted = action.end_date.format().slice(0,10);
      state = state.set('end_moment', action.end_date);
      return state.set('end_date', formatted);
    default:
      return state;
  }
}

export default mainReducer;
