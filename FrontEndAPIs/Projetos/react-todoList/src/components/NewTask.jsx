import { useState } from "react"
import Task from "./Task"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)


export default function NewTask() {

    const [newTask, setNewTask] = useState('')
    const [itemsList, setItemsList] = useState([])

    const handleChange = (event) => {
        const inputTask = event.target.value
        setNewTask(inputTask)
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        setNewTask('')
        if(!newTask){
            MySwal.fire({
                title: <strong>Oops!</strong>,
                html: <i>Please fill the task.</i>,
                icon: 'warning'
              })
        }else{
            setItemsList([...itemsList, newTask]);
        
    }}
    return (
        <div className="todoListMain">
            <form onSubmit={handleSubmit}>
                <input type="text" name="new-task" placeholder="New Task please" onChange={handleChange} />
                <button onClick={handleSubmit}>Create</button>
            </form>
            {itemsList.map((item) => ( 
                    <Task key={item} name={item} />
                    
                ))}
        </div>
    )
}

