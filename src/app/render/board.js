const CELL_COUNT = 8;

const renderCells = (rowIndex) =>
  new Array(CELL_COUNT)
    .fill(null)
    .map((_, indexCol) => {
      const isBlack = rowIndex % 2 ^ indexCol % 2;
      return `<div class="cell ${isBlack ? 'black' : 'white'}">${rowIndex}</div>`;
    })
    .join('');

const renderBoard = () => {
  const rows = new Array(CELL_COUNT)
    .fill(null)
    .map((_, index) => `<div class="row">${renderCells(index)}</div>`)
    .join('');
  return `
  <div class="board">
    ${rows}
  </div>
`;
};

export default renderBoard;
