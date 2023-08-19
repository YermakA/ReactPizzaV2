import React, { useState } from 'react'

export const Categories = ({ num, getCategoryId }) => {

  const typesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']



  return (
    <div className="categories">
      <ul>
        {typesArr.map((type, i) => {
          return <li
            key={i}
            onClick={() => getCategoryId(i)}
            className=
            {num === i ? 'active' : ''}>{type}</li>
        }
        )}
      </ul>
    </div>
  )
}

export default Categories