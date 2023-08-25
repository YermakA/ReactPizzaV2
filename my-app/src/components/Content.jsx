import React, { useEffect, useRef } from 'react'
import ContentTop from "./ContentTop"
import PizzaBlock from "./PizzaBlock"
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton'
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryId } from '../redux/slices/categorySlice'
import { getCurrentType } from '../redux/slices/sortSlice.js'
import { getQsAttr, getObjFromQs } from '../utils/createQueryString'
import { useNavigate } from 'react-router-dom'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
export const Content = () => {
  const dispatch = useDispatch()
  const showLinkRef = useRef(false)
  const firstLoading = useRef(true)
  const { pizzaProps, status } = useSelector((store) => store.pizza)
  const currentType = useSelector((store) => store.sort.currentType.typeProperty)
  const categoryId = useSelector((store) => store.category.categoryId)
  const pizzaName = useSelector((store) => store.search.word)
  const navigate = useNavigate()

  useEffect(() => {

    if (window.location.search) {
      const params = getObjFromQs(window.location.search)
      dispatch(getCurrentType(params.sortProperty))
      dispatch(getCategoryId(+params.categoryId))
      firstLoading.current = false
    }
  }, [])

  useEffect(() => {
    if (firstLoading.current) {
      const category = categoryId !== 0 ? categoryId : ''
      const sort = currentType ? `&sortby=${currentType}` : ''
      dispatch(fetchPizzas({ category, sort }))
    }
    firstLoading.current = true
  }, [categoryId, currentType, pizzaName])

  useEffect(() => {
    if (showLinkRef.current === true) {
      navigate(getQsAttr(currentType, categoryId))
    }
    showLinkRef.current = true
  }, [categoryId, currentType])


  const skeletons = [...new Array(9)].map((_, i) => <PizzaSkeleton key={i} />)
  const pizzas = pizzaProps.map((pizzaProps) => {
    return <PizzaBlock
      key={pizzaProps.id}
      {...pizzaProps}
    />
  })
  const filteredPizzas = pizzaProps.filter((pizzaProps) =>
    pizzaProps.title.toLocaleLowerCase()
      .includes(pizzaName.toLocaleLowerCase()))
    .map((pizzaProps) => {
      return <PizzaBlock
        key={pizzaProps.id}
        {...pizzaProps}
      />
    })


  return (
    <div className="content">
      <div className="container">
        <ContentTop />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            status === "loading" ?
              skeletons :
              pizzaName === '' ?
                pizzas : filteredPizzas
          }
          {
            status === "rejected" &&
            <h1>
              Возникла ошибка загрузки...
            </h1>
          }
        </div>
      </div>
    </div>

  )
}

export default Content
