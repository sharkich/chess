import isSelectedCell from '../services/is-selected-cell.js';

const renderCells = (row, rowIndex, selected, board) =>
  row
    .map(({ piece }, colIndex) => {
      const isBlack = rowIndex % 2 ^ colIndex % 2;
      return `<div class="board__cell ${isBlack ? 'board__cell_black' : 'board__cell_white'} ${
        piece ? (piece.color === 'black' ? 'piece-black' : 'piece-white') : ''
      } ${isSelectedCell(rowIndex, colIndex, board, selected) ? 'board__cell_movable' : ''} ${
        selected.piece && selected.row === rowIndex && selected.col === colIndex ? 'piece-selected' : ''
      }" data-row="${rowIndex}" data-col="${colIndex}">${piece ? piece.symbol : ''}</div>`;
    })
    .join('');

const renderBoard = (board, selected) => {
  const rows = board
    .map((row, index) => `<div class="board__row">${renderCells(row, index, selected, board)}</div>`)
    .join('');
  return `
  <div class="board">
    ${rows}
  </div>
`;
};

export default renderBoard;
