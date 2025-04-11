
import {useState } from 'react';
import './card.css'
import cardImg from './paw.png';

type Props = {
  title: string
  description: string;
}

const Cards: React.FC<Props> = ({ title, description }) => {

  const coppyClick = async () => {
    try {
      await navigator.clipboard.writeText(title)
    }   catch(err) {
      alert('Не удалось скопировать текст')
    }
  }

  // добавление класса 

  const [istoggle, setToggle] = useState<boolean>(true)

  const addClass =  () => {
    setToggle(!istoggle)
    setTimeout(() => {
      setToggle(istoggle)
    }, 500)
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
        <div className={`button`} onClick={coppyClick }>
          <img className={`svg ${istoggle ? '' : 'svg-show'}`} src={cardImg} onClick={() => {coppyClick(); addClass() }} />
        </div>
      </div>

  )
}


export default Cards 