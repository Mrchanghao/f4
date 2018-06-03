import {createStore} from 'redux';
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE/COUNT': {
      return {
        count: state.count + 1
      };
    }
    case 'DECREASE/COUNT': {
      return {
        count: state.count - 1
      };
    }
  }
  return state;
}
let store;
export function createAppStore() {
  store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());
  return store;
}
export function dispatch(action) {
  store.dispatch(action);
}
export function getState() {
  return store.getState();
}
export function subscribe(callback) {
  store.subscribe(callback);
}









