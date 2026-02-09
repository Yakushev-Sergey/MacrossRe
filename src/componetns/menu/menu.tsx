
import { useState } from 'react';
import './menu.css';


const Menu: React.FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)

  const openMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <button className='menu' onClick={openMenu}>Отчеты</button>

      <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
        <div className='close' onClick={() => { setOpen(false) }}>
          <span className="close-Y"></span>
          <span className="close-X"></span>
        </div>

        <div className="wrapper_menu-content">
          <div className="block">
            <div className="wrapper-title_block">
              <h3 className='title-menu'>Планирование Рейсов </h3>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/40676-rezul-taty-planirovaniya-yar-s-ssylkami-na-map-request-response-po-dat?store_uuid=19c193fd-3e98-41d3-9e6c-21a48ba519fa&date=2025-02-23"
                  target="_blank" className="menu__link">Результаты планирования YAR</a>
              </li>
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/47365-tablica-ya?route_plan_ended_date=2025-02-24&store_uuid=233dc233-11c2-4c8b-8956-31f684ade26e&sort_by=driver"
                  target="_blank" className="menu__link">планирования YAR карта Яндекс </a>
              </li>
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/93605-ruchnye-vmeshatel-stva-v-re?workflow_id=&date=&date2="
                  target="_blank" className="menu__link">Вмешательства в рейс </a>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="wrapper-title_block">
              <h3 className='title-menu'>Для партнеров </h3>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/41215-avtoprinyatie-offerov-partnero?id=1088046"
                  target="_blank" className="menu__link">Автопринятие офферов партнером</a>
              </li>
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/31950-naznacheniya-i" target="_blank"
                  className="menu__link">Назначения и МЛ</a>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="wrapper-title_block">
              <h3 className='title-menu'>Для логиста</h3>
            </div>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="https://tableau.sbmt.io/#/views/_16939201498150/sheet3?:iid=1" target="_blank"
                  className="menu__link">Отчет статистики для логиста </a>
              </li>
              <li className="menu__item">
                <a href="https://metabase.sbmt.io/question/97005-statusy-logistov-real-tajm?date=2026-01-05&date2=2026-01-05&name= (https://metabase.sbmt.io/question/97005-statusy-logistov-real-tajm?date=2026-01-05&date2=2026-01-05&name=%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0)" target="_blank"
                  className="menu__link">Время нахождение в статусах </a>
              </li>
              <li className="menu__item">
                <a href=" https://metabase.sbmt.io/question/97500-statusy-logistov-i-kol-vo-zayavok-s-granulyaci?date=2026-01-05&date2=2026-01-05&name=&gran=day " target="_blank"
                  className="menu__link">Время нахождение в статусах диаграмма </a>
              </li>
              <li className="menu__item">
                <a href="https://jira.sbmt.io/servicedesk/customer/portal/20/create/867" target="_blank"
                  className="menu__link">Jira Для оплаты Такси </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}



export default Menu