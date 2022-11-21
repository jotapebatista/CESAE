import { useState } from 'react'
import data from '../mockdata/data.json'

export default function DataTable() {
  const [todos, setTodos] = useState(data)
  todos.map(element => {
    console.log(element)
  })

  return (
    <div className="container">
      <div>
        <ul>
          {todos.map(({ id, task, complete }) => (
            <li id={id} content={task} complete={complete} />
          ))}
        </ul>
      </div>
    </div>

  )
}
