import './App.css'
import Title from "./components/Title"
import NewTask from './components/NewTask'
import Clock from './components/Clock'
import TaskList from './components/TaskList'
import Task from './components/Task'
import CheckBox from './components/CheckBox'
import { useState } from 'react'

function App() {

  return (
    <div>
      <header>
        <Clock />
        <Title />
        <hr />
      </header>
      <main>
        <NewTask /> 
      </main>
    </div>
  )
}

export default App
