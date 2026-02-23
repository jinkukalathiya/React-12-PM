import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/counter">UseReducer</Link>
            <Link to="/product">Product</Link>
            <Link to="/productfilter">Product Filter</Link>

            
        </nav>
    </>
  )
}

export default Navbar
