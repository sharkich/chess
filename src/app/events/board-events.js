import { BOX_PIECES } from '../model/pieces.js';

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

    element.addEventListener('click', (event) => {
      const piece = store.board[+row][+col].piece;
      if (!piece) {
        return;
      }
      store.board.forEach((_row) => _row.forEach((cell) => (cell.move = true)));
      render(store);
    });
  });
};

export default boardEvents;
