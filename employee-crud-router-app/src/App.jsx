import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddEmployee from './pages/AddEmployee'
import EditEmployee from './pages/EditEmployee'
import ViewEmployee from './pages/ViewEmployee'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/edit/:id' element={<EditEmployee/>}/>
        <Route path='/view' element={<ViewEmployee/>}/>
      </Routes>
    </>
  )
}

export default App
