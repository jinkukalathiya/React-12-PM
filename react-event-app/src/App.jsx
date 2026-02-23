import { useState } from 'react'
import Counter from './components/Counter';
import InputEvent from './components/InputEvent';
import FormEvent from './components/FormEvent';
import PassingArgument from './components/PassingArgument';
import CourseList from './components/CourseList';
import Quiz from './components/Quiz';
import FAQList from './components/FAQList';
import './App.css'


function App() {

  return (
    <>
      <Counter/>
      <InputEvent/>
      <FormEvent/>
      <PassingArgument/>
      <CourseList/>
      <Quiz/>
      <FAQList/>
    </>
  )
}

export default App
