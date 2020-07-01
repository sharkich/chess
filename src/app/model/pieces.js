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

const getColoredPiece = (piece, color) => ({ ...piece, color });

export const BOX_PIECES = [
  ...Object.keys(PIECES).map((key) => getColoredPiece(PIECES[key], 'black')),
  ...Object.keys(PIECES).map((key) => getColoredPiece(PIECES[key], 'white')),
];

export default PIECES;
