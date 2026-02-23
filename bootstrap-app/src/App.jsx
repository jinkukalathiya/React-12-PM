import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <Card/>
            </div>
            <div className='col-3'>
              <Card/>
            </div>
            <div className='col-3'>
              <Card/>
            </div>
            <div className='col-3'>
              <Card/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
