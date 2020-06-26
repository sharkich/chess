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
  cell.pieceElement.classList.remove('white-white');
  cell.pieceElement.classList.remove('white-black');
  cell.pieceElement.classList.remove('black-white');
  cell.pieceElement.classList.remove('black-black');
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

const getCell = (root, rowIndex, cellIndex) => {
  const element = document.createElement('div');
  element.classList.add('cell');
  const color = rowIndex % 2 ^ cellIndex % 2 ? 'black' : 'white';
  element.classList.add(color);

  const pieceElement = document.createElement('div');
  pieceElement.classList.add('piece');
  element.appendChild(pieceElement);

  const cell = {
    color,
    element,
    pieceElement,
    piece: null,
  };

  element.ondragover = (event) => event.preventDefault();
  element.ondrop = (event) => {
    event.preventDefault();
    onDropNewPiece(cell, event);
  };

  root.appendChild(element);
  return cell;
};

const getRow = (row, root, x, rowIndex) => {
  const element = document.createElement('div');
  element.classList.add('row');
  const cells = new Array(x).fill(CELL).map((cell, cellIndex) => getCell(element, rowIndex, cellIndex));
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
  const rows = new Array(y).fill(ROW).map((row, index) => getRow(row, element, x, index));
  return {
    element,
    rows,
  };
};

export default getBoard;
