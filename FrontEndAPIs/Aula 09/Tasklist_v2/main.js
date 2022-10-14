//Header
const username = "João Batista"
//const username = prompt("User: ")
const maintitle = document.querySelector('.main_title')
maintitle.textContent = `${maintitle.textContent} - ${username}`
//End Header

//Task Form
const formTask = document.querySelector('form')
//console.dir(formTask)

formTask.onsubmit = (event) => {
  
  event.preventDefault() //Blocks Form submission
  const description = event.target.task_description.value.trim() //.trim() -> removes blackspaces
  if (typeof description === 'string' && description.length === 0) { 
    alert("Please fill in the task!")
    return
  }

  const newTask = new Task(description)

  setTaskList(newTask)
  formTask.reset()
  formTask.focus()
}

//Task List
const tasksList = []

function setTaskList(newTask) {
  tasksList.push(newTask)

  if (!newTask.isCompleted) {
    taskListTodo.push(newTask)
    const ul = document.querySelector('#taskListTodo')
    ul.append(taskLiElement(newTask))
  }
}
// End Task List

// Create li element
function taskLiElement(newTask) {
  // const html = '<i class="fa-regular ' +  + '"></i><h4 class="task_list__list_item__content">' + newTask.description + '</h4>'
  const liElement = document.createElement('li')

  liElement.classList.add('task_list__list_item')


  const icon = newTask.isCompleted ? 'fa-circle-check' : 'fa-circle'
  liElement.innerHTML = `<i class="fa-regular ${icon}"></i><h4 class="task_list__list_item__content">${newTask.description}</h4>`

  function changeStatus() {
    const tListDone = document.querySelector('#taskListDone')
    const tListDo = document.querySelector('#taskListTodo')

    if (!newTask.isCompleted) {
      newTask.toggleIsCompleted()
      taskListDone.push(newTask)
      tListDone.append(taskLiElement(newTask))
      tListDo.remove(newTask)

    } else {
      newTask.toggleIsCompleted()
      taskListTodo.push(newTask)
      //taskListDone.append(taskLiElement(newTask))
      tListDone.remove(newTask)
    }
    console.log(tasksList)
  }

  liElement.addEventListener('click', changeStatus)
  console.log(liElement)
  console.log(tasksList)
  //console.log(liElement)
  return liElement
}

// End Create li element

// Lists initialization
let taskListTodo = tasksList.filter(newTask => !newTask.isCompleted)
let taskListDone = tasksList.filter(newTask => newTask.isCompleted)

