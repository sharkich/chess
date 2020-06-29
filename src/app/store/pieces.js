const PIECES = {
  Pawn: {
    type: 'Pawn',
    symbol: '♙',
  },
  Bishop: {
    type: 'Bishop',
    symbol: '♗',
  },
  Knight: {
    type: 'Knight',
    symbol: '♘',
  },
  Rook: {
    type: 'Rook',
    symbol: '♖',
  },
  Queen: {
    type: 'Queen',
    symbol: '♕',
  },
  King: {
    type: 'King',
    symbol: '♔',
  },
};

const BOX_PIECES = {
  white: [PIECES.Pawn, PIECES.Bishop, PIECES.Knight, PIECES.Rook, PIECES.Queen, PIECES.King],
  black: [PIECES.Pawn, PIECES.Bishop, PIECES.Knight, PIECES.Rook, PIECES.Queen, PIECES.King],
};

export default BOX_PIECES;
