import { BOX_PIECES } from '../model/pieces.js';

const CELL_COUNT = 8;

const DEFAULT_CELL = {
  piece: null,
  move: false,
};

const DEFAULT_STORE = {
  board: new Array(CELL_COUNT).fill(null).map(() => new Array(CELL_COUNT).fill(null).map(() => ({ ...DEFAULT_CELL }))),
  selected: {
    piece: null,
    row: 0,
    col: 0,
  },
  box: {
    white: BOX_PIECES.filter((piece) => piece.color === 'white'),
    black: BOX_PIECES.filter((piece) => piece.color === 'black'),
  },
};

export default class Store {
  constructor() {
    this.history = [];
    this.data = JSON.parse(JSON.stringify(DEFAULT_STORE));
  }

  getStore() {
    return JSON.parse(JSON.stringify(this.data));
  }

  setStore(data) {
    this.data = { ...this.data, ...data };
    this.history.push(JSON.stringify(this.data));
  }

  back() {
    const version = this.history.pop();
    if (version === JSON.stringify(this.data) && version !== JSON.stringify(DEFAULT_STORE)) {
      return this.back();
    }
    this.data = version ? JSON.parse(version) : DEFAULT_STORE;
  }
}
