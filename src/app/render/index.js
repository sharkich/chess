import PIECES from '../game/pieces';
import { isEqualArray } from '../utils/array.js';

const renderPiece = (piece, selected) => `
  <div class="piece ${selected ? 'selected' : ''}">
    ${piece.symbol}
  </div>
`;

const renderCell = (cell, rowIndex, cellIndex, selected) => `
  <div class="cell ${cell.color}" data-row="${rowIndex}" data-col="${cellIndex}">
    ${cell.piece ? renderPiece(cell.piece, isEqualArray(selected, [rowIndex, cellIndex])) : ''}
    ${rowIndex === 0 ? `<div class="coordinate coordinate-x">${String.fromCharCode(65 + cellIndex)}</div>` : ''}
    ${cellIndex === 0 ? `<div class="coordinate coordinate-y">${rowIndex + 1}</div>` : ''}
  </div>
`;

const renderRow = (row, rowIndex, selected) => `
  <div class="row">
    ${row.map((cell, index) => renderCell(cell, rowIndex, index, selected)).join('')}
  </div>
`;

export const renderBoard = (store) => `
    <div class="board">
        ${store.board.map((row, index) => renderRow(row, index, store.selected)).join('')}
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
