import initEvents from './events';
import renderBack from './render/back.js';
import renderBoard from './render/board.js';
import renderBox from './render/box.js';
import Store from './store';

const app = (root) => {
  const store = new Store();
  const render = () => {
    const data = store.getStore();
    root.innerHTML = `
      ${renderBoard(data.board, data.selected)}
      ${renderBox(data.box)}
      ${renderBack()}
    `;
    initEvents(root, store, render);
  };
  render();
};

export default app;
