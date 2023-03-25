const chooseFinishWinBg = () => {
  const max = 9;
  const min = 1;
  let rnd = Math.floor(Math.random() * (max - min + 1)) + min;

  switch (rnd) {
    case 1:
      return '_bg1';
    case 2:
      return '_bg2';
    case 3:
      return '_bg3';
    case 4:
      return '_bg4';
    case 5:
      return '_bg5';
    case 6:
      return '_bg6';
    case 7:
      return '_bg7';
    case 8:
      return '_bg8';
    case 9:
      return '_bg9';
    default:
      return '_bg1';
  }
};

export default chooseFinishWinBg;
