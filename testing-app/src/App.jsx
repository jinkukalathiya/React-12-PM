import { useState } from 'react'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Student from './components/Student';
import Card from './components/Card';
import Count from './components/Count';
import Counter from './components/Counter';
import LifeCycle from './components/LifeCycle';
import CounterUseState from './components/CounterUseState';
import NameInput from './components/NameInput';
import StudentForm from './components/StudentForm';
import CounterUseEffect from './components/CounterUseEffect';
import './App.css'
import TimerCleanup from './components/TimerCleanup';
import DigitalClock from './components/DigitalClock';

function App() {

  const name = "Jinkal Kalathiya";

  return (
    <>
      {/* <h1>Hello, {name}</h1>
      <Hello/>
      <Welcome/>
      <Student name="Smit"/>
      <Card title="Laptop" price="55,000"/>
      <Count/>
      <Counter/>
      <LifeCycle/> 
       <CounterUseState/> */}
      {/* <NameInput/> */}
      {/* <StudentForm/> */}
      <CounterUseEffect/>
      <TimerCleanup/>
      <DigitalClock/>
    </>
  )
}

export default App
