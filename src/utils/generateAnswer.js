const generateAnswer = (user, secret) => {
  const answer = [];
  const secretCode = JSON.parse(JSON.stringify(secret));
  const userCode = JSON.parse(JSON.stringify(user));

  for (let field in userCode) {
    if (userCode[`${field}`] === secretCode[`${field}`]) {
      answer.push('yes');
      delete secretCode[`${field}`];
      delete userCode[`${field}`];
    }
  }

  for (let field in userCode) {
    let res = 'no';
    for (let item in secretCode) {
      if (userCode[`${field}`] === secretCode[`${item}`]) {
        res = 'almost';
        delete secretCode[`${item}`];
        break;
      }
    }
    answer.push(res);
  }
  shuffle(answer);
  return answer;
};

export default generateAnswer;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    // поменять элементы местами
    // используем для этого синтаксис "деструктурирующее присваивание",
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}
