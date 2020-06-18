import PIECES from '../game/pieces';

const getPiece = (root, piece) => {
  const element = document.createElement('div');
  element.classList.add('piece');
  element.innerText = piece.symbol;
  root.appendChild(element);

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
  const pieces = PIECES[color].forEach((piece) => getPiece(element, piece));

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
