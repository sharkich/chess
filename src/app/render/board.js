const CELL_COUNT = 8;

const renderBoard = () => {
  const cells = new Array(CELL_COUNT)
    .fill(null)
    .map(() => `<div class="cell"></div>`)
    .join('');
  const rows = new Array(CELL_COUNT)
    .fill(null)
    .map(() => `<div class="row">${cells}</div>`)
    .join('');
  return `
  <div class="board">
    ${rows}
  </div>
`;
};

export default renderBoard;
