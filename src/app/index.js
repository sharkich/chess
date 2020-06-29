import './css.js';
import initStore from './store';
import initEvents from './events';
import { renderBoard, renderBox } from './render';

const app = (root) => {
  const store = initStore();
  console.log('store', store);

  const render = () => {
    console.log('render');
    root.innerHTML = `${renderBoard(store)}${renderBox()}`;
    initEvents(root, store, render);
  };

  render();
};

export default app;
