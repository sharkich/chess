import './css.js';
import getBoard from './board';

const CELLS_X = 8;
const CELLS_Y = 8;

const app = (root) => {
  const board = getBoard(CELLS_X, CELLS_Y);
  root.appendChild(board.element);
};

export default app;
