import {
  SELL_SHARE,
  BUY_SHARE,
  ADD_SYMBOL,
  UPDATE_SYMBOL,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
} from './constants';

export function addSymbol(symbol){
  return {
    type: ADD_SYMBOL,
    symbol,
  };
}

export function updateSymbol(symbol) {
  return {
    type: UPDATE_SYMBOL,
    symbol,
  };
}

export function updateStartDate(start_date){
  return {
    type: UPDATE_START_DATE,
    start_date,
  }
}

export function updateEndDate(end_date){
  return {
    type: UPDATE_END_DATE,
    end_date,
  }
}

export function buyShare(symbol){
  return {
    type: BUY_SHARE,
    symbol,
  }
}

export function sellShare(symbol){
  return {
    type: SELL_SHARE,
    symbol,
  }
}