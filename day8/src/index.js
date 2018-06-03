/*
const $ = require('jquery');
const Div = require('./components/Div');
const Button = require('./components/Button');
*/
import $ from 'jquery';
import {createStore} from 'redux';
import {Div, Button} from './components';
/*import Div from './components/Div';
import Button from './components/Button';*/

/*function reducer(state) {
  if (!state) {
    state = {
      count: 0
    };
  }
  return state;
}*/

function reducer(state = { count: 0 }, action) {
  // console.log('state: ', state);
  // console.log('action: ', action);
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
const store = createStore(reducer);
//console.log(store);
window.store = store;
const app = $('#app');
app.append(Div({ id: 'count', children: 0 }));
app.append(Button({ id: 'btn-up', children: 'up' }));
app.append(Button({ id: 'btn-down', children: 'down' }));

$('#btn-up').on('click', () => {
  store.dispatch({type: 'INCREASE/COUNT'});
  // render();
});
$('#btn-down').on('click', () => {
  store.dispatch({type: 'DECREASE/COUNT'});
  // render();
});

store.subscribe(render);

function render() {
  const state = store.getState();
  $('#count').text(state.count);
}





