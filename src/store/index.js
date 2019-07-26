import { createStore } from 'redux';
import { combineReducers } from 'redux';

import reducers from './reducers';


export const reducer = combineReducers({
  groups: reducers.GroupReducer,
  indexCounter: reducers.IndexCounterReducer,
  members: reducers.MemberReducer,
  expenses: reducers.ExpenseReducer,
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
