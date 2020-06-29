import isCellsAvailableForMove from '../store/moves';

const initEvents = (root, store, setStore, render) => {
  // Cell Click
  root.querySelectorAll('.cell').forEach((element) =>
    element.addEventListener('click', () => {
      const { row, col } = element.dataset;
      const piece = store.board[row][col].piece;
      if (!piece) {
        if (isCellsAvailableForMove(store, row, col)) {
          // Move
          store.board[store.selected.row][store.selected.col].piece = null;
          store.board[row][col].piece = store.selected.piece;
          store.selected = null;
          setStore(store);
        }
        render();
        return;
      }
      // Select Piece
      setStore({
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
      store.board[row][col].piece = piece;
      setStore(store);
      render();
    })
  );
};

export default initEvents;
