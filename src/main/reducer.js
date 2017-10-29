import { fromJS } from 'immutable';

import {
  ADD_SYMBOL,
  UPDATE_SYMBOL,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
} from './constants';

export const initialState = fromJS({
  symbol: [],
  start_date: "",
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
      return state.set('start_date', action.start_date);
    case UPDATE_END_DATE:
      return state.set('end_date', action.end_date);
    default:
      return state;
  }
}

export default mainReducer;
