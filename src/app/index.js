import renderBoard from './render/board.js';
import renderBox from './render/box.js';
console.log('app');

const app = (root) => {
  root.innerHTML = `
    ${renderBoard()}
    ${renderBox()}
  `;
};

export default app;
