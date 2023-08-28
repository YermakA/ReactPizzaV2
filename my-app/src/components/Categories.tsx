import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryId } from '../redux/slices/categorySlice'
import { RootState } from "../redux/store"
import ICategorySlice from "../redux/slices/ICategorySlice"
const Categories: FC = React.memo(() => {

  const category = useSelector<RootState, ICategorySlice>((store) => store.category)
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
})

export default Categories