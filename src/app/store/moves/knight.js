const isCellsAvailableForKnightMove = (store, rowIndex, colIndex) => {
  const { row, col, piece } = store.selected;
  return (
    (Math.abs(row - rowIndex) === 2 && Math.abs(col - colIndex) === 1) ||
    (Math.abs(row - rowIndex) === 1 && Math.abs(col - colIndex) === 2)
  );
};

export default isCellsAvailableForKnightMove;
