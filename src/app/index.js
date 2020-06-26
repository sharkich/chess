import './css.js';
import getBoard from './board';
import initEvents from './events';
import { renderBoard, renderBox } from './render';

const CELLS_X = 8;
const CELLS_Y = 8;

const app = (root) => {
  const board = getBoard(CELLS_X, CELLS_Y);
  console.log('board', board);

  const render = () => {
    console.log('render');
    root.innerHTML = `${renderBoard(board)}${renderBox()}`;
    initEvents(root, board, render);
  };

  render();
};

export default app;
