const pieceMove = (row, col, board) => {
  const piece = board[+row][+col].piece;
  switch (piece.type) {
    case 'King':
      board.forEach((_row) => _row.forEach((cell) => (cell.move = true)));
    case 'Pawn':
    case 'Bishop':
  }
  return board;
};

export default pieceMove;
