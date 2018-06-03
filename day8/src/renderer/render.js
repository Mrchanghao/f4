import $ from 'jquery';
import {getState} from '../store';

export function render() {
  const state = getState();
  renderCount(state);
}
function renderCount(state) {
  $('#count').text(state.count);
}