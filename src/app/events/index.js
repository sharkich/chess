import backEvents from './back-event.js';
import boardEvents from './board-events.js';
import boxEvents from './box-events.js';

const initEvents = (root, store, render) => {
  boxEvents(root);
  boardEvents(root, store, render);
  backEvents(root, store, render);
};

export default initEvents;
