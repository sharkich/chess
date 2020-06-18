const ROW = { element: null, cells: [] };
const CELL = { element: null };

const getCell = (cell, root, rowIndex, cellIndex) => {
  const element = document.createElement('div');
  element.classList.add('cell');
  const color = rowIndex % 2 ^ cellIndex % 2 ? 'black' : 'white';
  element.classList.add(color);
  root.appendChild(element);
  return {
    ...cell,
    element,
  };
};

const getRow = (row, root, x, rowIndex) => {
  const element = document.createElement('div');
  element.classList.add('row');
  const cells = new Array(x).fill(CELL).map((cell, cellIndex) => getCell(cell, element, rowIndex, cellIndex));
  root.appendChild(element);
  return {
    ...row,
    element,
    cells,
  };
};

const getBoard = (x, y) => {
  const element = document.createElement('div');
  element.classList.add('board');
  const board = new Array(y).fill(ROW).map((row, index) => getRow(row, element, x, index));
  return {
    element,
    board,
  };
};

export default getBoard;
