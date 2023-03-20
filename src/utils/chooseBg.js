const chooseBg = () => {
  const max = 4;
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
    default:
      return 'view_bg1';
  }
};

export default chooseBg;
