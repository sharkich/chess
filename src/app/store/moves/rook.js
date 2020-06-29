const isCellsAvailableForRookMove = (store, rowIndex, colIndex) => {
  const { row, col, piece } = store.selected;
  return rowIndex === row || colIndex === col;
};

export default isCellsAvailableForRookMove;
