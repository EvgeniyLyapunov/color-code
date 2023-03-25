import Description from '../description/Description';
import Author from '../author/Author';
import Auth from '../auth/Auth';

const modalContent = (id) => {
  switch (id) {
    case 'auth':
      return <Auth />;
    case 'descr':
      return <Description />;
    case 'author':
      return <Author />;
    default:
      return null;
  }
};

export default modalContent;
