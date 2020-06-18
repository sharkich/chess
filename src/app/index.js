import './css.js';
import getBoard from './board';
import updateCoordinates from './board/coordinates.js';

const CELLS_X = 8;
const CELLS_Y = 8;

const app = (root) => {
  const board = getBoard(CELLS_X, CELLS_Y);
  updateCoordinates(board);
  console.log('board', board);
  root.appendChild(board.element);
};

export default app;
