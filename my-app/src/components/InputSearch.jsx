import React, { useState } from 'react'
import style from './InputSearch.module.scss'
import zoom from '../assets/img/zoom.svg'
const InputSearch = () => {


  const [input, setInput] = useState('')
  const placeholder = input === '' ?
    <span className={style.placeholder}>Напишите название пиццы...</span> : ''
  return (
    <div className={style.container}>
      <img className={style.zoom} src={zoom} alt="magnifying glass" />
      {placeholder}
      <input className={style['input-search']} maxLength={30} onChange={(e) => setInput(e.target.value)} value={input} />
    </div>
  )
}

export default InputSearch