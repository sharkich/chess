import { BOX_PIECES } from '../model/pieces.js';
import isSelectedCell from '../services/is-selected-cell.js';

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
      const data = store.getStore();
      data.board[+row][+col].piece = { ...piece };
      store.setStore(data);
      render();
    });

    element.addEventListener('click', () => {
      const data = store.getStore();
      const piece = data.board[+row][+col].piece;

      // Move
      if (piece) {
        // Select
        data.selected.piece = { ...piece };
        data.selected.row = +row;
        data.selected.col = +col;
        store.setStore(data);
      } else if (isSelectedCell(+row, +col, data.board, data.selected)) {
        // move
        data.board[+row][+col].piece = data.selected.piece;
        data.board[data.selected.row][data.selected.col].piece = null;
        data.selected.row = +row;
        data.selected.col = +col;
        store.setStore(data);
      }
      render();
    });
  });
};

export default boardEvents;
