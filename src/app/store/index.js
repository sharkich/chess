const CELLS_X = 8;
const CELLS_Y = 8;

const ROW = { element: null, cells: [] };
const CELL = { element: null };

const getCell = (rowIndex, cellIndex) => {
  const color = rowIndex % 2 ^ cellIndex % 2 ? 'black' : 'white';

  const cell = {
    color,
    piece: null,
  };

  return cell;
};

const getRow = (row, x, rowIndex) => new Array(x).fill(CELL).map((cell, cellIndex) => getCell(rowIndex, cellIndex));

const initStore = () => {
  const board = new Array(CELLS_Y).fill(ROW).map((row, index) => getRow(row, CELLS_X, index));
  return {
    board,
    selected: null,
  };
};

export default initStore;
