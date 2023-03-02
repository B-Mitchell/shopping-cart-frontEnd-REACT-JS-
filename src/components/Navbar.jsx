import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import '../styles/navbar.css'


const Navbar = () => {

  return (
    <div className='navbar'>

        <h2 className='mainName'>Local Warehouse</h2>

        <div className='links'>
            <Link to="/"  className='shopLink'>Shop</Link>
            <Link to="/cart" className='shopLink'>
                <ShoppingCart size={32} />
            </Link>
        </div>



    </div>

    
  )
}

export default Navbar