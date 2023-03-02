import React, { useContext } from 'react'
import "./cart.css"
import ShopContext from '../../context/shop-context'


const CartItem = (props) => {

  const { id , price , product , img } = props.data
  const { cartItems , addToCart, removeFromCart , updateCartItemCount } = useContext(ShopContext)

  const totalNumberOfItem = cartItems[id]

  console.log(product)
  return (
    <>
    <br />
    <br />
    <br />
    <br />

    <div className='cartContainer'>
      <div className='cartFirstDiv'>
      <img className='cartImg' src= { img } alt="jacket"/>
      </div>
      
      <div className='cartSecondDiv'>
      <h1 className='productName'> {product} </h1>
      <p className='cartPrice'>Price: ${price}</p>
      <div>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input  value={totalNumberOfItem} onChange={(e) => updateCartItemCount(Number(e.target.value) , id)}/>
        <button  onClick={() => addToCart(id)}> + </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default CartItem