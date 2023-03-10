import Description from "../description/Description";

const modalContent = (id) => {
  switch(id) {
    case 'auth':
      return null;
    case 'descr':
      return <Description/>;
    case 'author':
      return null;
    default:
      return null
  }
}

export default modalContent;