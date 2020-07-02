const backEvents = (root, store, render) => {
  const element = document.getElementById('back');
  if (!element) {
    throw new Error('No Back button');
  }
  element.addEventListener('click', () => {
    console.log('click');
    store.back();
    render();
  });
};

export default backEvents;
