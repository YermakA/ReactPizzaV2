import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSortType } from '../redux/slices/sortSlice'
import {RootState} from '../redux/store'
import ISortSlice from "../redux/slices/ISortSlice"

const Sort = () => {
  const sortRef = useRef(null)


  const dispatch = useDispatch()
  const object = useSelector<RootState,ISortSlice >((store) => store.sort)
  const [view, changeView] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    const popupHandler = (e) => {
      if (e.target !== sortRef.current) {
        changeView(false)
      }
    }
    if ( body !== null) {
      body.addEventListener('click', popupHandler)
      return () => {
        body.removeEventListener('click', popupHandler)
      }
    }
  }, [])

  return (
    <div className="sort">
      <div className="sort__label"
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span ref={sortRef} onClick={() => changeView((prevView) => !prevView)}>{object.currentType.name}</span>
      </div>
      {view &&
        <div className="sort__popup">
          <ul>
            {object.sortTypeArr.map((obj, i) => <li
              key={i}
              onClick={() => dispatch(getSortType(obj))}
              className={object.currentType.name === obj.name
                ? "active" : ""}>{obj.name}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Sort