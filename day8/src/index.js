import $ from 'jquery';
import {createAppStore, subscribe} from './store';
import {Div, Button} from './components';
import { decrease, increase } from './actions/counter';
import {render} from './renderer/render'
createAppStore();
const app = $('#app');
app.append(Div({ id: 'count', children: 0 }));
app.append(Button({ id: 'btn-up', children: 'up' }));
app.append(Button({ id: 'btn-down', children: 'down' }));
$('#btn-up').on('click', increase);
$('#btn-down').on('click', decrease);
subscribe(render);
