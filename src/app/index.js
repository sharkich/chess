import './css.js';
import Store from './store';
import initEvents from './events';
import { renderBack, renderBoard, renderBox } from './render';

const app = (root) => {
  const store = new Store();
  console.log('store', store);

  const render = () => {
    console.log('render');
    root.innerHTML = `${renderBoard(store.getStore())}${renderBox()}${renderBack()}`;
    initEvents(root, store, render);
  };

  render();
};

export default app;
