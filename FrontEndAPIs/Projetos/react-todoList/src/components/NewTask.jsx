import { useState } from "react"
import Task from "./Task"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)


export default function NewTask() {

    const [newTask, setNewTask] = useState('')
    const [itemsList, setItemsList] = useState([])

    function removeItem(todoId){
        console.log(todoId)
       
        const deleteItem = itemsList.filter((item, idx) => idx !== todoId)
        setItemsList([...deleteItem]) 
        console.log(deleteItem)
    }

    const handleChange = (event) => {
        const inputTask = event.target.value
        setNewTask(inputTask)
    }

    function handleSubmit(ev) {
        
        ev.preventDefault()
        if (!newTask) {
            MySwal.fire({
                title: <strong>Oops!</strong>,
                html: <i>Please fill the task.</i>,
                icon: 'warning'
            })
        } else {
            setNewTask('')
            setItemsList([...itemsList, newTask])
            ev.target.reset()
        }
    }

    return (
        <div className="todo-app-main">
            <form onSubmit={handleSubmit}>
                <input type="text" name="new-task" placeholder="New Task please" onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
            {itemsList.map((item, id) => (
                <Task id={id} name={item} key={id} removeItemProp={()=>{removeItem(id)}} />
                ))}
        </div>
    )
}

