import { useState } from 'react'
import { TaskList } from './components/tasks/TaskList'
import './App.css'

function App() {
  return (
    <>
      <h1 className='text-4xl text-indigo-600 mb-6 font-bold'>Task Manager</h1>
      <TaskList/>
    </>
  )
}

export default App
