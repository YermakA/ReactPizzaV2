import React, { useCallback, useState, useRef } from 'react'
import style from './InputSearch.module.scss'
import zoom from '../assets/img/zoom.svg'
import deleteImg from '../assets/img/delete.svg'
import { useDispatch } from 'react-redux'
import { inputWord } from '../redux/slices/searchSlice'
import debounce from "lodash.debounce"

const InputSearch = () => {
  const [name, setName] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const searchDebounce = useCallback(debounce((str) => {
    dispatch(inputWord(str))
  }, 500)
    , [])


  const onChangeInput = (value) => {
    setName(value)
    searchDebounce(value)
  }

  const placeholder = name === '' ?
    <span className={style.placeholder}>Напишите название пиццы...</span>
    :
    <img onClick={() => onChangeInput('')} className={style.deleteImg} src={deleteImg} alt="delete" />
  return (
    <div className={style.container}>
      <img className={style.zoom} src={zoom} alt="magnifying glass" />

      {placeholder}
      <input className={`${style['input-search']} ${name !== '' ? style['input-filled'] : ''}`}
        maxLength={30}
        ref={nameRef}
        onChange={(e) => onChangeInput(e.target.value)} value={name} />

    </div>
  )
}

export default InputSearch