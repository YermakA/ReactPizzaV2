import React, { useEffect, useState, useRef } from 'react'
import ContentTop from "./ContentTop"
import PizzaBlock from "./PizzaBlock"
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getCategoryId } from '../redux/slices/categorySlice'
import { getCurrentType } from '../redux/slices/sortSlice.js'
import { getQsAttr, getObjFromQs } from '../utils/createQueryString'
import { useNavigate } from 'react-router-dom'
export const Content = () => {
  const dispatch = useDispatch()
  const showLinkRef = useRef(false)
  const firstLoading = useRef(true)
  const [pizzaProps, setPizzaProps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const currentType = useSelector((store) => store.sort.currentType.typeProperty)
  const categoryId = useSelector((store) => store.category.categoryId)
  const pizzaName = useSelector((store) => store.search.word)
  const navigate = useNavigate()

  useEffect(() => {

    if (window.location.search) {
      console.log('2')
      const params = getObjFromQs(window.location.search)
      dispatch(getCurrentType(params.sortProperty))
      dispatch(getCategoryId(+params.categoryId))
      firstLoading.current = false
    }
  }, [])

  useEffect(() => {
    if (firstLoading.current) {
      setIsLoading(true)
      const category = categoryId !== 0 ? categoryId : ''
      const sort = currentType ? `&sortby=${currentType}` : ''
      axios.get(`https://64de1ae9825d19d9bfb213b0.mockapi.io/items/?category=${category}${sort}`)
        .then(res => {
          setPizzaProps(res.data)
          setIsLoading(false)
        }
        )
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
            isLoading ?
              skeletons :
              pizzaName === '' ?
                pizzas : filteredPizzas
          }

        </div>
      </div>
    </div>

  )
}

export default Content
