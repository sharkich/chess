const renderPieces = (pieces) =>
  pieces
    .map((piece) => `<div class="box__piece" draggable="true" data-id="${piece.id}">${piece.symbol}</div>`)
    .join('');

const renderBox = (box) => `
    <div class="box">
      <div class="box__pieces box__pieces_white">${renderPieces(box.white)}</div>
      <div class="box__pieces box__pieces_black">${renderPieces(box.black)}</div>
    </div>
  `;

export default renderBox;
