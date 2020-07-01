import boardEvents from './board-events.js';
import boxEvents from './box-events.js';

const initEvents = (root) => {
  boxEvents(root);
  boardEvents(root);
};

export default initEvents;
