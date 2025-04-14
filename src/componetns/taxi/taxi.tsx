

import React, { useEffect, useState } from 'react'
import taxiImg from './paw2.png'
import './taxi.css'


const Taxi: React.FC = () => {

  const [isLink, setLink] = useState<string[]>([])
  const [isInputValue, setInputValue] = useState<{[key:number]: string}>({});
  const [isInputShow, seyInputShow] = useState<{[key: number]: boolean}>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newLinks = [...isLink];
    newLinks[index] = (event.target.value);
    setLink(newLinks);
    setInputValue({...isInputValue, [index]: event.target.value});
    seyInputShow({...isInputShow, [index]: event.target.value.trim() !== ''});
  }
  
  const openLink = (index: number) => {
    if (isLink[index]) {
      window.open(isLink[index], '_blank')
    }
  }

  
  const storedLinks = localStorage.getItem('links')
  useEffect(() => {
    if (storedLinks) {
      setLink(JSON.parse(storedLinks))
    }
  },[])
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(isLink))
  }, [isLink])

  // клик setTimeout 
  const [isClickShow, setClickShow] = useState<{[key:number]: boolean}>({});

  const clickshowlink = (inputId: number) => {
    setClickShow((state) => ({
      ...state,
      [inputId]: true,
    }))
    setTimeout(() => {
      setClickShow((state) => ({
        ...state,
        [inputId]: false,
      }))
    }, 15000)
}

  let taxiLink = []
  for (let i = 1; i <= 9; i++) {
    taxiLink.push(
      <div className={`copp__wrapper ${isClickShow[i] && isLink[i] ? 'showTimeOut' : ''}`} key={i}>

        <input className={`taxi__input ${isInputShow[i] ? 'show': ''}`} 
        type="text" value={isLink[i] || ''} 
        onChange={(event) => handleChange(event, i)} />

        <img className="copp__tax" src={taxiImg} onClick={() => {openLink(i); clickshowlink(i)}} />
      </div>
    )
  }

  return (
    taxiLink
  )
}

export default Taxi
