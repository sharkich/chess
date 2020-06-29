const initEvents = (root, store, render) => {
  // Cell Click
  root.querySelectorAll('.cell').forEach((element) =>
    element.addEventListener('click', () => {
      const { row, col } = element.dataset;
      const piece = store.board[row][col].piece;
      if (!piece) {
        return;
      }
      store.selected = [+row, +col];
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
      render();
    })
  );
};

export default initEvents;
