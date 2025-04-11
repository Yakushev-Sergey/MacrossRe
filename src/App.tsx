import BtnMenu from "./componetns/btnMenu/btnMenu"
import Cards from "./componetns/cards/card"
import Menu from "./componetns/menu/menu"
import Taxi from "./componetns/taxi/taxi"
import textData from './text.json'

function App() {


  return (

    <div className="container">
      <div className="wrapper-taxi">
        <Taxi />
      </div>
      <div className="wrapper">
        <BtnMenu/>
        <Menu isOpen/>
        {textData.map((card, index) => (
          <Cards
            key={index}
            description={card.description}
            title={card.title}
          />
        ))}
      </div>
    </div>

  )
}

export default App
