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

const getRow = (row, x, rowIndex) => {
  const cells = new Array(x).fill(CELL).map((cell, cellIndex) => getCell(rowIndex, cellIndex));
  return {
    ...row,
    cells,
  };
};

const getBoard = (x, y) => {
  const rows = new Array(y).fill(ROW).map((row, index) => getRow(row, x, index));
  return {
    rows,
  };
};

export default getBoard;
