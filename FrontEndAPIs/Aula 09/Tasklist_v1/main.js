//Header

const username = prompt("Utilizador: ")
//const username = 'Miguel'

const maintitle = document.querySelector('.main_title')

maintitle.textContent = `${maintitle.textContent} (${username})`

//End Header

//Task Form
const formTask = document.querySelector('form')

formTask.onsubmit = (event) => {
  //Trava a submissão foir formolário
  event.preventDefault()
  const description = event.target.task_description.value
  const newTask = new Task(description)

  setTaskList(newTask)
  // taskLiElement(newTask)
}

// formTask.onsubmit = function(event){
//   event.preventDefault()
//   console.log(event)
//   const description = event.target.task_description.value
//   const newTask = new Task(description)

//   tasksList.push(newTask)
//   console.log(tasksList)
// }

//End Form

//Task List
const tasksList = []

function setTaskList(newTask){
  tasksList.push(newTask)

  if(!newTask.isCompleted){
    taskListTodo.push(newTask)
    console.log(taskListTodo)

    const ul = document.querySelector('#taskListTodo')
    ul.append(taskLiElement(newTask))
  }

}

// End Task List

// Create li element

function taskLiElement(newTask){
  // const html = '<i class="fa-regular ' +  + '"></i><h4 class="task_list__list_item__content">' + newTask.description + '</h4>'
  const liElement = document.createElement('li')

  liElement.classList.add('task_list__list_item')
  
  const icon = newTask.isCompleted ? 'fa-circle-check' : 'fa-circle'
  liElement.innerHTML = `
    <i class="fa-regular ${icon}"></i>
    <h4 class="task_list__list_item__content">${newTask.description}</h4>
  `

  console.log(liElement)
  return liElement
}

// End Create li element

// Lists initialization
let taskListTodo = tasksList.filter(newTask => !newTask.isCompleted)
