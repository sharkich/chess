import { BOX_PIECES } from '../model/pieces.js';

const CELL_COUNT = 8;

const STORE = {
  board: new Array(CELL_COUNT).fill(null).map(() => new Array(CELL_COUNT).fill(null)),
  box: {
    white: BOX_PIECES.filter((piece) => piece.color === 'white'),
    black: BOX_PIECES.filter((piece) => piece.color === 'black'),
  },
};

export default STORE;
