import isCellsAvailableForMove from '../store/moves';

const initEvents = (root, store, render) => {
  // Cell Click
  root.querySelectorAll('.cell').forEach((element) =>
    element.addEventListener('click', () => {
      const { row, col } = element.dataset;
      const data = store.getStore();
      const piece = data.board[row][col].piece;
      if (!piece) {
        if (isCellsAvailableForMove(data, row, col)) {
          // Move
          data.board[data.selected.row][data.selected.col].piece = null;
          data.board[row][col].piece = data.selected.piece;
          data.selected = null;
          store.setStore(data);
        }
        render();
        return;
      }
      // Select Piece
      store.setStore({
        selected: {
          row: +row,
          col: +col,
          piece,
        },
      });
      render();
    })
  );

  // Drag pieces from the box

  root.querySelectorAll('.box .piece').forEach((element) =>
    element.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('type', element.dataset.type);
      event.dataTransfer.setData('symbol', element.innerHTML);
      event.dataTransfer.setData('color', element.dataset.color);
    })
  );

  root
    .querySelectorAll('.board .cell')
    .forEach((element) => element.addEventListener('dragover', (event) => event.preventDefault()));

  root.querySelectorAll('.board .cell').forEach((element) =>
    element.addEventListener('drop', (event) => {
      event.preventDefault();
      const { row, col } = element.dataset;
      const piece = {
        type: event.dataTransfer.getData('type'),
        symbol: event.dataTransfer.getData('symbol'),
        color: event.dataTransfer.getData('color'),
        selected: false,
      };
      const data = store.getStore();
      data.board[row][col].piece = piece;
      store.setStore(data);
      render();
    })
  );

  // Back
  const back = document.getElementById('back');
  if (back) {
    back.addEventListener('click', () => {
      store.back();
      render();
    });
  }
};

export default initEvents;
