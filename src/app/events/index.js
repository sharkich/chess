import boardEvents from './board-events.js';
import boxEvents from './box-events.js';

const initEvents = (root, store, render) => {
  boxEvents(root, store, render);
  boardEvents(root, store, render);
};

export default initEvents;
