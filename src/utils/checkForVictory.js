const checkForVictory = (answer) => {
  const isWin = answer.filter((item) => item === 'yes');
  if (isWin.length === 4) {
    return true;
  } else {
    return false;
  }
};

export default checkForVictory;
