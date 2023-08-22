import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryId } from '../redux/slices/categorySlice'
export const Categories = () => {

  const category = useSelector((store) => store.category)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {category.typesArr.map((type, i) => {
          return <li
            key={i}
            onClick={() => dispatch(getCategoryId(i))}
            className=
            {category.categoryId === i ? 'active' : ''}>{type}</li>
        }
        )}
      </ul>
    </div>
  )
}

export default Categories