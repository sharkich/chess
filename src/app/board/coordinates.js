const updateCoordinates = (board) => {
  board.rows[board.rows.length - 1].cells.forEach((cell, index) => {
    const element = document.createElement('div');
    element.innerText = String.fromCharCode(65 + index);
    element.classList.add('coordinate');
    element.classList.add('coordinate-x');

    cell.element.appendChild(element);
  });

  board.rows.forEach((row, index) => {
    const element = document.createElement('div');
    element.innerText = '' + (board.rows.length - index);
    element.classList.add('coordinate');
    element.classList.add('coordinate-y');

    row.cells[0].element.appendChild(element);
  });
};

export default updateCoordinates;
