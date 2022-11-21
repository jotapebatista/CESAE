import Todo from './Todo'
import { useState } from 'react'

export default function InputNewTask() {
    const [task, setTask] = useState('')

    const createNewTask = (evt) => {
        if (evt.key === 'Enter') {
            setTask(evt.target.value)
          }
    }

    return (
        <div>
            <h3>What needs to be done?</h3>
            <input type="text" onKeyDown={createNewTask} />
            {/* <button style={{ margin: '10px' }} onClick={createNewTask}>Add Task</button> */}
            <div className='todoList'>
            <Todo name={task} />
            </div>
        </div>

    )
}