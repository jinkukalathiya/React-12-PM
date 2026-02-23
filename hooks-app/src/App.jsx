import { useState } from 'react';
import Navbar from './components/Navbar';
import UseReducer from './hooks/UseReducer';
import UserContext from './context/UserContext';
import Home from './components/Home';
import Profile from './components/Profile';
import ProductFilter from './components/ProductFilter';
import ProductUseReducer from './components/ProductUseReducer';
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'


function App() {

  const [user, setUser] = useState("Jinkal Kalathiya");

  return (
    <>
      
      <Navbar/>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/counter' element={<UseReducer/>}/>
          <Route path='/product' element={<ProductFilter/>}/>
          <Route path='/productfilter' element={<ProductUseReducer/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
