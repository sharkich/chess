const renderPiece = (piece) => `
  <div class="piece">
    ${piece.symbol}
  </div>
`;

const renderCell = (cell) => `
  <div class="cell ${cell.color}">
    ${cell.piece ? renderPiece(cell.piece) : ''}
  </div>
`;

const renderRow = (row) => `
  <div class="row">
    ${row.cells.map(renderCell).join('')}
  </div>
`;

export const renderBoard = (rootElement, board) => {
  rootElement.innerHTML = `
    <div class="board">
        ${board.rows.map(renderRow).join('')}
    </div>
  `;
};
