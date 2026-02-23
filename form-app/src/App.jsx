import { useState } from 'react'
import ConditionalRender from './components/ConditionalRender';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';
import RegistrationForm from './components/RegistrationForm';
import './App.css'

function App() {
  return (
    <>
      {/* <ConditionalRender/>   */}
      {/* <ControlledComponent/> */}
      {/* <UnControlledComponent/> */}
      <RegistrationForm/>
    </>
  )
}

export default App
