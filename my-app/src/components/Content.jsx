import React, { useEffect, useState } from 'react'
import ContentTop from "./ContentTop"
import PizzaBlock from "./PizzaBlock"
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton'
export const Content = () => {
  const [type, setType] = useState({ name: 'популярности', typeProperty: 'rating' })
  const [pizzaProps, setPizzaProps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  useEffect(() => {
    const category = categoryId !== 0 ? categoryId : ''
    const sort = type.typeProperty ? `&sortby=${type.typeProperty}` : ''
    fetch(`https://64de1ae9825d19d9bfb213b0.mockapi.io/items/?category=${category}${sort}`)
      .then(res => res.json()
      )
      .then(data => {
        setPizzaProps(data)
        setIsLoading(false)
      }

      )
  }, [categoryId, type])

  const getCategoryId = (id) => {
    setCategoryId(id)
  }

  const getSortType = (type) => {
    setType(type)
  }

  const skeletons = [...new Array(9)].map((_, i) => <PizzaSkeleton key={i} />)
  const pizzas = pizzaProps.map((pizzaProps) => {
    return <PizzaBlock
      key={pizzaProps.id}
      {...pizzaProps}
    />
  })

  return (
    <div className="content">
      <div className="container">
        <ContentTop sortType={type} num={categoryId} getCategoryId={getCategoryId} getSortType={getSortType} />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ?
              skeletons :
              pizzas
          }

        </div>
      </div>
    </div>

  )
}

export default Content
