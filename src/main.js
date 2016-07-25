import store from '../src/store';

const render = () => {
  document.body.innerText = store.getState();
};
store.subscribe(render);

render();
document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
