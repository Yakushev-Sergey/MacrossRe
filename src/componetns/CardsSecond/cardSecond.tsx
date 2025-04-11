import "./cardsSecond.css"
import imgCardTu from './paw.png'


const CardsSecond: React.FC<{ description: string; title: string }> = ({ description, title }) => {

  return (
    <div className="wrapper-box__mini">
      <div className="box__wrapper boxlittle">
        <div className="title__mini">
          {description}
        </div>
        <div className="box__mini">
          {title}
        </div>
        <div className="button">
          <img className="svg" src={imgCardTu} />
        </div>
      </div>
    </div>
  )
}



export default CardsSecond