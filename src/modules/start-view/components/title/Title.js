import './title.scss';

const Title = () => {
  return(
    <div className="title">
      <h1 className="title__txt">Color Code</h1>
      <ul className="title__decor">
        <li className="title__decor-color title__decor-color-red"></li>
        <li className="title__decor-color title__decor-color-yellow"></li>
        <li className="title__decor-color title__decor-color-green"></li>
        <li className="title__decor-color title__decor-color-blue"></li>
        <li className="title__decor-color title__decor-color-brown"></li>
      </ul>
    </div>
  )
}

export default Title;