const select = (bord, row, col) => {
  if (bord[row][col]) {
    bord[row][col].move = true;
  }
};

const isSelectedCell = (row, col, board, selected) => {
  if (!selected.piece || board[row][col].piece) {
    return false;
  }
  switch (selected.piece.type) {
    case 'Rook':
      return row === selected.row || col === selected.col;
    case 'King':
    case 'Pawn':
    case 'Bishop':
      return false;
  }
  return board;
};

export default isSelectedCell;
