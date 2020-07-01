const boxEvents = (root) => {
  root.querySelectorAll('.box__piece').forEach((element) => {
    const id = element.dataset.id;
    element.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('id', id);
    });
  });
};

export default boxEvents;
