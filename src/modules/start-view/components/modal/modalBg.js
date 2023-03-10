const modalBg = (id) => {
  switch(id) {
    case 'auth':
      return 'modal__window_bg-auth';
    case 'descr':
      return 'modal__window_bg-descr';
    case 'author':
      return 'modal__window_bg-author';
    default:
      return {}
  }
}

export default modalBg;