import { useState } from 'react'
import data from '../mockdata/data.json'

export default function DataTable() {
  const [todos, setTodos] = useState(data)
  todos.forEach(element => {
    console.log(element)
    
  });
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>

        <div>

        </div>
      </div>
    </div>
  )
}
