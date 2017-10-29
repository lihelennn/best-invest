import {createSelector} from 'reselect';

// const makeSelectMainPageDomain = () => (state) => state.get('main');
const symbolSelector = state => state.symbol;
const startDateSelector = state => state.start_date;
const endDateSelector = state => state.end_date;


const makeSelectSymbol = () => createSelector(
  symbolSelector,
  (substate) => substate,
);

const makeSelectStartDate = () => createSelector(
  startDateSelector,
  (substate) => substate,
);

const makeSelectEndDate = () => createSelector(
  endDateSelector,
  (substate) => substate,
);

const makeSelectMain = () => createSelector(
  // makeSelectMainPageDomain(),
  (substate) => substate.toJS()
);

// export default makeSelectMainPageDomain;
export {
  makeSelectMain,
  makeSelectSymbol,
  makeSelectStartDate,
  makeSelectEndDate,
}
