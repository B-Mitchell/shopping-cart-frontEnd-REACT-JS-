import React, { useContext } from "react";
import ShopContext from "../../context/shop-context";
import { ITEMS } from "../../items";
import CartItem from "./CartItem";
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cartItems , getTotalCartAmount  } = useContext(ShopContext)

    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <>
        <br />
        <br /> 
        <br />
        <br />
        
        <h1 className="mainItemText">
            {totalAmount > 0 ? "View" : "No items in"} your cart
        </h1>
     
        <div className="flex">
            { ITEMS.map((item) => {
                return cartItems[item.id] > 0 && <CartItem data={item} key={item.id} />
            })}
        </div>
        
        {
            totalAmount > 0 
            &&
            <div className="checkoutDiv"> 
                <p className="subTotal"> SubTotal: <b>${ totalAmount }</b> </p> 
                <div>
                    <button className="cart_buttons" onClick={() => navigate("/")}>Continue Shopping</button>
                    <button className="cart_buttons">Checkout</button>
                </div>
            </div>
        }
        <br />
        <br />
        </>
    )
}

export default Cart
