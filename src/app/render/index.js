import isCellsAvailableForMove from '../store/moves';
import BOX_PIECES from '../store/pieces.js';
import { isEqualArray } from '../utils/array.js';

const renderPiece = (piece, selected) => `
  <div class="piece ${selected ? 'selected' : ''}">
    ${piece.symbol}
  </div>
`;

const renderCell = (cell, rowIndex, colIndex, store) => {
  const isCellForMove = isCellsAvailableForMove(store, rowIndex, colIndex);
  return `
  <div class="cell ${cell.color}" data-row="${rowIndex}" data-col="${colIndex}">
    ${
      cell.piece
        ? renderPiece(cell.piece, store.selected && store.selected.row === rowIndex && store.selected.col === colIndex)
        : isCellForMove
        ? '<div class="for-move"></div>'
        : ''
    }
    ${rowIndex === 0 ? `<div class="coordinate coordinate-x">${String.fromCharCode(65 + colIndex)}</div>` : ''}
    ${colIndex === 0 ? `<div class="coordinate coordinate-y">${rowIndex + 1}</div>` : ''}
  </div>
`;
};

const renderRow = (row, rowIndex, store) => `
  <div class="row">
    ${row.map((cell, index) => renderCell(cell, rowIndex, index, store)).join('')}
  </div>
`;

export const renderBoard = (store) => `
    <div class="board">
        ${store.board.map((row, index) => renderRow(row, index, store)).join('')}
    </div>
  `;

// ***** BOX *****

const renderBoxPiece = (piece, color) => `
  <div class="piece" draggable="true" data-color="${color}" data-type="${piece.type}">${piece.symbol}</div>
`;

export const renderBox = () => `
    <div class="box">
        <div class="box-line">
            ${BOX_PIECES.black.map((piece) => renderBoxPiece(piece, 'black')).join('')}
        </div>
        <div class="box-line">
            ${BOX_PIECES.white.map((piece) => renderBoxPiece(piece, 'white')).join('')}
        </div>
    </div>
  `;
