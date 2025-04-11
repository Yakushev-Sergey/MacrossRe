import { useState } from 'react'
import './btnMenu.css'
import Menu from '../menu/menu'

const BtnMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const openMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <button className='menu' onClick={openMenu}>Отчеты</button>
      {isOpen && <Menu isOpen={isOpen}/>}
    </>
  )
}


export default BtnMenu