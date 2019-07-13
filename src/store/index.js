import { createStore } from 'redux';
import { combineReducers } from 'redux';

import reducers from './reducers';

const people = (state = null, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const expenses = (state = null, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const payments = (state = null, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const activeGroup = (state = null, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const reducer = combineReducers({
  groups: reducers.GroupReducer,
  indexCounter: reducers.IndexCounterReducer,
  selectedGroup: reducers.SelectedGroupReducer,
  people,
  expenses,
  payments,
  activeGroup
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
