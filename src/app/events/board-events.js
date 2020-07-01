import { BOX_PIECES } from '../model/pieces.js';
import pieceMove from '../services/piece-move.js';

const boardEvents = (root, store, render) => {
  root.querySelectorAll('.board__cell').forEach((element) => {
    const { row, col } = element.dataset;

    element.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    element.addEventListener('drop', (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData('id');
      const piece = BOX_PIECES.find((_piece) => _piece.id === id);
      // console.log([row, col], id, piece);
      store.board[+row][+col].piece = piece;
      console.log(store);
      render(store);
    });

    element.addEventListener('click', () => {
      const piece = store.board[+row][+col].piece;
      if (!piece) {
        return;
      }
      store.board = pieceMove(+row, +col, store.board);
      render(store);
    });
  });
};

export default boardEvents;
