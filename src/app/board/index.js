const ROW = { element: null, cells: [] };
const CELL = { element: null };

const getCell = (root, rowIndex, cellIndex) => {
  const element = document.createElement('div');
  element.classList.add('cell');
  const color = rowIndex % 2 ^ cellIndex % 2 ? 'black' : 'white';
  element.classList.add(color);

  const pieceElement = document.createElement('div');
  pieceElement.classList.add('piece');
  element.appendChild(pieceElement);

  const cell = {
    pieceElement,
    element,
  };

  element.ondragover = (event) => event.preventDefault();
  element.ondrop = (event) => {
    event.preventDefault();
    pieceElement.classList.remove('white-white');
    pieceElement.classList.remove('white-black');
    pieceElement.classList.remove('black-white');
    pieceElement.classList.remove('black-black');
    const type = event.dataTransfer.getData('type');
    const symbol = event.dataTransfer.getData('symbol');
    const pieceColor = event.dataTransfer.getData('color');
    pieceElement.innerText = symbol;
    pieceElement.classList.add(`${color}-${pieceColor}`);
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
