// import BtnMenu from "./componetns/btnMenu/btnMenu"
import Cards from "./componetns/cards/card"
import Menu from "./componetns/menu/menu"
import Taxi from "./componetns/taxi/taxi"
import {TextScript} from './text'

function App() {


  return (

    <div className="container">
   
      <div className="wrapper">
        {/* <BtnMenu/> */}
        <Menu />
        {TextScript.map((card, index) => (
          <Cards
            key={index}
            description={card.description}
            title={card.title}
          />
        ))}
      </div>
      <div className="wrapper-taxi">
        <Taxi />
      </div>
    </div>

  )
}

export default App
