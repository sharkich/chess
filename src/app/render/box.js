import PIECES from '../model/pieces.js';

const PIECES_FOR_BOX = [PIECES.Pawn, PIECES.Knight, PIECES.Bishop, PIECES.Rook, PIECES.Queen, PIECES.King];

const renderBox = () => {
  const pieces = PIECES_FOR_BOX.map((piece) => `<div class="piece">${piece.symbol}</div>`).join('');
  return `
    <div class="box">
      <div class="box-pieces box-white">${pieces}</div>
      <div class="box-pieces box-black">${pieces}</div>
    </div>
  `;
};

export default renderBox;
