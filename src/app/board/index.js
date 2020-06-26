const ROW = { element: null, cells: [] };
const CELL = { element: null };

const onSelectPiece = (cell) => {
  cell.piece.selected = !cell.piece.selected;
  if (cell.piece.selected) {
    cell.pieceElement.classList.add('selected');
  } else {
    cell.pieceElement.classList.remove('selected');
  }
};

const onDropNewPiece = (cell, event) => {
  cell.pieceElement.classList.remove('white-white', 'white-black', 'black-white', 'black-black');
  const type = event.dataTransfer.getData('type');
  const symbol = event.dataTransfer.getData('symbol');
  const pieceColor = event.dataTransfer.getData('color');
  cell.piece = {
    type,
    symbol,
    pieceColor,
    selected: false,
  };
  cell.pieceElement.innerText = symbol;
  cell.pieceElement.classList.add(`${cell.color}-${pieceColor}`);
  cell.pieceElement.onclick = () => onSelectPiece(cell);
};

const getCell = (rowIndex, cellIndex) => {
  const color = rowIndex % 2 ^ cellIndex % 2 ? 'black' : 'white';

  const cell = {
    color,
    piece: null,
  };

  // element.ondragover = (event) => event.preventDefault();
  // element.ondrop = (event) => {
  //   event.preventDefault();
  //   onDropNewPiece(cell, event);
  // };

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
