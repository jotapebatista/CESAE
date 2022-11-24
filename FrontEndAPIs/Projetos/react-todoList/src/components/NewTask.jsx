import { useState } from "react"
import Task from "./Task"

export default function NewTask() {
    

    const [input, setInput] = useState('')
    const [task, setTask] = useState([])

    const addTask = (ev) => {
        console.log(task.map((value, index) => console.log(value)))
        ev.preventDefault()
        setTask([...task, {
            value: input, 
            status: false
        }])
    }

    return (
        <div className="todoListMain">
            <form>
                <input type="text" name="todo" placeholder="New task" value={input} onChange={(ev) => setInput(ev.target.value)} />
                <button onClick={addTask}>Add</button>
               
            </form>
        {/* {task.map((value, index) => <Task name={value} key={index} />)} */}

        {/* <Task todoTask={task} /> */}
        </div>
    )
}

