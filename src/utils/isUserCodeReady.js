const isUserCodeReady = (userCode) => {
  for (let field in userCode) {
    if (userCode[`${field}`] === '') {
      return false;
    }
  }
  return true;
};

export default isUserCodeReady;
