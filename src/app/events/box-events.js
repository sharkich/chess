const boxEvents = (root) => {
  root.querySelectorAll('.box__piece').forEach((element) => {
    element.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('piece_type', 'king');
      console.log('dragstart');
    });
  });
};

export default boxEvents;
