const generateColorCode = () => {
  function rndColor() {
    const max = 5;
    const min = 1;
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(rnd) {
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'blue';
      case 4:
        return 'green';
      case 5:
        return 'brown';
      default:
        return 'red';
    }
  }
  return {
    first: rndColor(),
    second: rndColor(),
    third: rndColor(),
    fourth: rndColor()
  }
};

export default generateColorCode;