import PIECES from '../game/pieces';

const getPiece = (root, piece, color) => {
  const element = document.createElement('div');
  element.classList.add('piece');
  element.innerText = piece.symbol;
  root.appendChild(element);

  element.setAttribute('draggable', 'true');
  element.ondragstart = (event) => {
    event.dataTransfer.setData('type', piece.type);
    event.dataTransfer.setData('symbol', piece.symbol);
    event.dataTransfer.setData('color', color);
  };

  return {
    element,
    piece,
  };
};

const getBoxLine = (root, color) => {
  const element = document.createElement('div');
  element.classList.add('box-line');
  root.appendChild(element);

  if (!PIECES[color]) {
    throw new Error('Unpredictable color');
  }
  const pieces = PIECES[color].forEach((piece) => getPiece(element, piece, color));

  return {
    element,
    pieces,
  };
};

const getBox = () => {
  const element = document.createElement('div');
  element.classList.add('box');

  const lines = [getBoxLine(element, 'black'), getBoxLine(element, 'white')];

  return {
    lines,
    element,
  };
};

export default getBox;
