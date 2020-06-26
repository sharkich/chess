import './css.js';
import getBoard from './board';
import updateCoordinates from './board/coordinates.js';
import getBox from './box';
import { renderBoard } from './render';

const CELLS_X = 8;
const CELLS_Y = 8;

const app = (root) => {
  const board = getBoard(CELLS_X, CELLS_Y);
  // updateCoordinates(board);
  console.log('board', board);
  // root.innerHTML(board.element);

  // const box = getBox();
  // root.appendChild(box.element);
  renderBoard(root, board);
};

export default app;
