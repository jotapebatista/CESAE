import { useState } from "react"
import Task from "./Task"



function addTask(name){
  setTasks(prev => {
    return [...prev, {name:name, done:false}]
  })
}

export default function TaskList() {
  return (
    <div>
      <input type="checkbox" name="" id="" />
      <Task />     
    </div>
  )
}
 