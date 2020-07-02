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
      store.board[+row][+col].piece = { ...piece };
      render(store);
    });

    element.addEventListener('click', () => {
      const piece = store.board[+row][+col].piece;
      if (!piece) {
        return;
      }
      store.selected.piece = { ...piece };
      store.selected.row = +row;
      store.selected.col = +col;
      render(store);
    });
  });
};

export default boardEvents;
