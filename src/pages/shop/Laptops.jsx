import React, { useContext } from 'react'
import "../../styles/ItemContainer.css"
import ShopContext from '../../context/shop-context';

const Laptops = (props) => {
  const {  id , product , img , price } = props.data;
  const { addToCart , cartItems } = useContext(ShopContext)
  const totalAmount = cartItems[id]

  return (
    <div className='container'>
      <h1 className='productName'> {product} </h1>
      <img src= { img } alt="jacket"/>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart {totalAmount > 0 && <>({totalAmount})</>}</button>
    </div>
  )
}

export default Laptops