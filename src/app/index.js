import renderBoard from './render/board.js';
console.log('app');

const app = (root) => {
  root.innerHTML = `
    <div>Hello, World!</div>
    ${renderBoard()}
  `;
};

export default app;
