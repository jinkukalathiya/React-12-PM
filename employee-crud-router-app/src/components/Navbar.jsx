import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Employee</Link>
            <Link to="/view">View Employee</Link>
        </nav>
    </>
  )
}

export default Navbar
