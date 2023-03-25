const chooseGameBg = () => {
  const max = 14;
  const min = 1;
  let rnd = Math.floor(Math.random() * (max - min + 1)) + min;

  switch (rnd) {
    case 1:
      return 'view_bg1';
    case 2:
      return 'view_bg2';
    case 3:
      return 'view_bg3';
    case 4:
      return 'view_bg4';
    case 5:
      return 'view_bg5';
    case 6:
      return 'view_bg6';
    case 7:
      return 'view_bg7';
    case 8:
      return 'view_bg8';
    case 9:
      return 'view_bg9';
    case 10:
      return 'view_bg10';
    case 11:
      return 'view_bg11';
    case 12:
      return 'view_bg12';
    case 13:
      return 'view_bg13';
    case 14:
      return 'view_bg14';
    default:
      return 'view_bg1';
  }
};

export default chooseGameBg;
