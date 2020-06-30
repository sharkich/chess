const renderPieces = (pieces) => pieces.map((piece) => `<div class="piece">${piece.symbol}</div>`).join('');

const renderBox = (box) => `
    <div class="box">
      <div class="box-pieces box-white">${renderPieces(box.white)}</div>
      <div class="box-pieces box-black">${renderPieces(box.black)}</div>
    </div>
  `;

export default renderBox;
