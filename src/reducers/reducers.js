import { combineReducers } from 'redux';

const tick = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const text = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.input;
    default:
      return state;
  }
};

// necessary when # of reducers > 1
const reducers = combineReducers({
  tick,
  text
});

export default reducers;
