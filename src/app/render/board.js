const renderCells = (row, rowIndex) =>
  row
    .map((_, indexCol) => {
      const isBlack = rowIndex % 2 ^ indexCol % 2;
      return `<div class="cell ${isBlack ? 'black' : 'white'}">${rowIndex}</div>`;
    })
    .join('');

const renderBoard = (board) => {
  const rows = board.map((row, index) => `<div class="row">${renderCells(row, index)}</div>`).join('');
  return `
  <div class="board">
    ${rows}
  </div>
`;
};

export default renderBoard;
