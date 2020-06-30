import PIECES from '../model/pieces.js';

const CELL_COUNT = 8;

const PIECES_FOR_BOX = [PIECES.Pawn, PIECES.Knight, PIECES.Bishop, PIECES.Rook, PIECES.Queen, PIECES.King];

const STORE = {
  board: new Array(CELL_COUNT).fill(new Array(CELL_COUNT).fill(null)),
  box: {
    white: [...PIECES_FOR_BOX],
    black: [...PIECES_FOR_BOX],
  },
};

export default STORE;
