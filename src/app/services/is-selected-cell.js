const isSelectedCell = (row, col, board, selected) => {
  if (!selected.piece || board[row][col].piece) {
    return false;
  }
  switch (selected.piece.type) {
    case 'Rook':
      if (row !== selected.row && col !== selected.col) {
        return false;
      }
      if (row === selected.row) {
        const min = Math.min(col, selected.col);
        const max = Math.max(col, selected.col);
        for (let i = min; i <= max; i++) {
          if (i !== selected.col && board[row][i].piece) {
            return false;
          }
        }
        return true;
      } else if (col === selected.col) {
        const min = Math.min(row, selected.row);
        const max = Math.max(row, selected.row);
        for (let i = min; i <= max; i++) {
          if (i !== selected.row && board[i][col].piece) {
            return false;
          }
        }
        return true;
      }
      return;
    case 'King':
    case 'Pawn':
    case 'Bishop':
      return false;
  }
  return board;
};

export default isSelectedCell;
