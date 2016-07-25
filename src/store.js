import counter from '../src/counter';
import {createStore} from 'redux';

const store = createStore(counter);

export default store;
