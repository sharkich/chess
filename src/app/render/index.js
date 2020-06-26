import PIECES from '../game/pieces';

const renderPiece = (piece) => `
  <div class="piece ${piece.selected ? 'selected' : ''}">
    ${piece.symbol}
  </div>
`;

const renderCell = (cell, rowIndex, cellIndex) => `
  <div class="cell ${cell.color}" data-row="${rowIndex}" data-col="${cellIndex}">
    ${cell.piece ? renderPiece(cell.piece) : ''}
    ${rowIndex === 0 ? `<div class="coordinate coordinate-x">${String.fromCharCode(65 + cellIndex)}</div>` : ''}
    ${cellIndex === 0 ? `<div class="coordinate coordinate-y">${rowIndex + 1}</div>` : ''}
  </div>
`;

const renderRow = (row, rowIndex) => `
  <div class="row">
    ${row.cells.map((cell, index) => renderCell(cell, rowIndex, index)).join('')}
  </div>
`;

export const renderBoard = (board) => `
    <div class="board">
        ${board.rows.map((row, index) => renderRow(row, index)).join('')}
    </div>
  `;

// ***** BOX *****

const renderBoxPiece = (piece, color) => `
  <div class="piece" draggable="true" data-color="${color}" data-type="${piece.type}">${piece.symbol}</div>
`;

export const renderBox = () => `
    <div class="box">
        <div class="box-line">
            ${PIECES.black.map((piece) => renderBoxPiece(piece, 'black')).join('')}
        </div>
        <div class="box-line">
            ${PIECES.white.map((piece) => renderBoxPiece(piece, 'white')).join('')}
        </div>
    </div>
  `;
