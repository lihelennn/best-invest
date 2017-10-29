import { fromJS } from 'immutable';

import {
  UPDATE_SYMBOL,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
} from './constants';

export const initialState = fromJS({
  symbol: "",
  start_date: "",
  end_date: "",
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
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
