import isCellsAvailableForKnightMove from './knight.js';
import isCellsAvailableForRookMove from './rook.js';

const isCellsAvailableForMove = (store, rowIndex, colIndex) => {
  if (!store.selected || store.board[rowIndex][colIndex].piece) {
    return false;
  }
  switch (store.selected.piece.type) {
    case 'Pawn':
    case 'Bishop':
      return false;
    case 'Knight':
      return isCellsAvailableForKnightMove(store, rowIndex, colIndex);
    case 'Rook':
      return isCellsAvailableForRookMove(store, rowIndex, colIndex);
    case 'Queen':
      return false;
    case 'King':
      return true;
  }
};

export default isCellsAvailableForMove;
