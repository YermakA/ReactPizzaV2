import React from 'react'
import style from './Cart.module.scss'
import { Link } from "react-router-dom"
import CartItem from './CartItem'
import trash from '../../assets/img/trash.svg'
import { clearAllItems } from '../../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
export const Cart = () => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()
  return (

    <div className="container">
      {cart.pizzasArr.length !== 0 ? <div className={style['trash-clear']} >
        <div onClick={() => dispatch(clearAllItems())} className={style['trash-clear-in']}>
          <span className={style['trash-text']}>Очистить корзину</span>
          <img className={style.trash} src={trash} alt="мусорная корзина" />
        </div>
      </div>
        : ""
      }

      <div class={style.contentItems}>
        {cart.pizzasArr.map(pizza => <CartItem
          key={pizza.id}
          types={cart.pizzaTypeArr}
          pizza={pizza}
        />)}


      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span> Всего пицц: <b>{cart.totalAmount} шт.</b> </span>
          <span> Сумма заказа: <b>{cart.totalPrice} ₽</b> </span>
        </div>
        <div class={style['cart__bottom-buttons']}  >
          <Link to="/" class="button button--outline button--add go-back-btn">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span>Вернуться назад</span>
          </Link>
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  )
  //   <div className={style.root}>

  //     <h1>
  //       <span>&#128546;</span>
  //       <br />
  //       Козина пуста</h1>
  //   </div>
  // )
}
