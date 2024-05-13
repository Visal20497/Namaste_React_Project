import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsCards from './ItemsCards'
import { clearCart } from '../Utils/CartSlice'

function Cart() {
  const cart = useSelector((store) => {
    return store.cart.item
  })
  let dispatch=useDispatch()
  function handleClearCart(){
    dispatch(clearCart())
  }
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-center font-bold text-2xl p-4 m-4'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='rounded-lg p-2  bg-black text-white' onClick={handleClearCart}>Clear Cart</button>
        {cart.length===0 && (<h1>Cart is empty and Add the Items in the cart</h1>)}
        <ItemsCards item={cart} />
      </div>
    </div>
  )
}

export default Cart