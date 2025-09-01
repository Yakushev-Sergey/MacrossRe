
import { useState } from 'react';
import './card.css'
import cardImg from './paw.png';
import cardImgCrow from './mapleLeaf.png';

type CardsProps = {
  description: string;
  title: string;
}

const Cards: React.FC<CardsProps> = ({description, title }) => {

  const coppyClick = async () => {
    try {
      await navigator.clipboard.writeText(title)
    } catch (err) {
      alert('Не удалось скопировать текст')
    }
  }

  // добавление класса 

  const [istoggle, setToggle] = useState<boolean>(false)

  const addClass = async () => {
    try {
      await setToggle(true)
      setTimeout(() => {
        setToggle(false)
      }, 500)
    } catch (err) {
      alert('Обнови страницу ')
    }
  };


  return (
    <div className="box__wrapper">
      <div className="wrapper-card">
        <div className="title">
          {description}
        </div>
        <div className="box">
          <p className="text">
            {title}
          </p>
        </div>
      </div>
      <div className={`button`} onClick={coppyClick}>
        <img className={`svg ${istoggle ? 'svg-show' : ''}`} src={cardImgCrow} onClick={() => { coppyClick(); addClass() }} />
      </div>
    </div>

  )
}


export default Cards 