import { createStore } from 'redux';
import { combineReducers } from 'redux';

import reducers from './reducers';


const payments = (state = null, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const reducer = combineReducers({
  groups: reducers.GroupReducer,
  indexCounter: reducers.IndexCounterReducer,
  members: reducers.MemberReducer,
  expenses: reducers.ExpenseReducer,
  payments
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
