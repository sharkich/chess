import { BOX_PIECES } from '../model/pieces.js';

const CELL_COUNT = 8;

const DEFAULT_CELL = {
  piece: null,
  move: false,
};

const STORE = {
  board: new Array(CELL_COUNT).fill(null).map(() => new Array(CELL_COUNT).fill(null).map(() => ({ ...DEFAULT_CELL }))),
  selected: {
    piece: null,
    row: 0,
    col: 0,
  },
  box: {
    white: BOX_PIECES.filter((piece) => piece.color === 'white'),
    black: BOX_PIECES.filter((piece) => piece.color === 'black'),
  },
};

export default STORE;
