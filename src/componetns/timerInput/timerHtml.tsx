import styleTime from './timerStyle.module.css'

const TimerHTML = () => {


  return (
    <>
      <div className={styleTime.timerWrapper}>
        <div className={styleTime.timer}>
          <input className={styleTime.inputTimer} type="text" placeholder="Введите время в минутах " />
        </div>
        <div className={styleTime.closeTime}></div>
      </div>

      <div className={styleTime.timerWrapperAlert}>
        <div className={styleTime.timer}>
          <h1 className={styleTime.timerText}>Время До окончания заказа <br/>10 минут </h1>
        </div>
        <div className={styleTime.closeTime}></div>
      </div>
    </>
  )
}


export default TimerHTML