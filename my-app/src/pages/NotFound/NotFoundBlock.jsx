import React from 'react'
import style from './NotFoundBlock.module.scss'
export const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>&#129488;</span>
        <br />
        Ничего не найдено</h1>
    </div>
  )
}
