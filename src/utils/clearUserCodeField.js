const clearUserCodeField = (userCode) => {
  for (let field in userCode) {
    const colorClass = `user-code-field__item_${userCode[`${field}`]}`;
    document.getElementById(`${field}`).classList.remove(colorClass);
  }
};

export default clearUserCodeField;
