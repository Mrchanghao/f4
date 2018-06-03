import {dispatch} from '../store';
export function increase() {
  dispatch({type: 'INCREASE/COUNT'});
}
export function decrease() {
  dispatch({type: 'DECREASE/COUNT'});
}
