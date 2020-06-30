import renderBoard from './render/board.js';
import renderBox from './render/box.js';
import STORE from './store';

const app = (root) => {
  const render = (store) => {
    root.innerHTML = `
      ${renderBoard(store.board)}
      ${renderBox(store.box)}
    `;
  };
  render(STORE);
};

export default app;
