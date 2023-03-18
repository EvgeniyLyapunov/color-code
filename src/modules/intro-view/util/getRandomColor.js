function setRandomColor() {
  const max = 5;
  const min = 1;
  let rnd = Math.floor(Math.random() * (max - min + 1)) + min;

  switch(rnd) {
    case 1:
      return '#ff006e';
    case 2:
      return '#ffed66';
    case 3:
      return '#3a86ff';
    case 4:
      return '#16db65';
    case 5:
      return '#d09259';
    default:
      return 'white';
  }
}

export default setRandomColor;