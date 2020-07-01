const boardEvents = (root) => {
  root.querySelectorAll('.board__cell').forEach((element) => {
    element.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    element.addEventListener('drop', (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData('id');
      console.log(id);
    });
  });
};

export default boardEvents;
