const ROW = { element: null, cells: [] };
const CELL = { element: null };

const initBoard = (x, y) => {
  const boardElement = document.createElement('div');
  const board = new Array(y).fill(ROW).map((row) => {
    const rawElement = document.createElement('div');
    const cells = new Array(x).fill(CELL).map((cell) => {
      const cellElement = document.createElement('div');
      rawElement.appendChild(cellElement);
      return {
        ...cell,
        element: cellElement,
      };
    });
    boardElement.appendChild(rawElement);
    return {
      ...row,
      element: rawElement,
      cells,
    };
  });
  return {
    element: boardElement,
    board,
  };
};

export default initBoard;
