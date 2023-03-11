import Description from "../description/Description";
import Author from "../author/Author";

const modalContent = (id) => {
  switch(id) {
    case 'auth':
      return null;
    case 'descr':
      return <Description/>;
    case 'author':
      return <Author/>;
    default:
      return null;
  }
}

export default modalContent;