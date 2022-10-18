//Header

// const username = prompt("Utilizador: ")
const username = 'Miguel'

const maintitle = document.querySelector('.main_title')

maintitle.textContent = `${maintitle.textContent} (${username})`

//End Header

//Task Form
const formTask = document.querySelector('form')

formTask.onsubmit = (event) => {
  //Trava a submissão foir formolário
  event.preventDefault()
  console.log(event)
  const description = event.target.task_description.value.trim()

  if(description == null || description === ''){
    alert('A descrição é obrigatória!')
    return
  }

  const newTask = new Task(description)
  setTaskList(newTask)
  
  //Evento que limpa o formulário
  event.target.reset()
}

// formTask.addEventListener("submit", onSubmitHandler) 

// function onSubmitHandler(event){
//   //Trava a submissão foir formolário
//   event.preventDefault()
//   const description = event.target.task_description.value
//   const newTask = new Task(description)

//   setTaskList(newTask)
//   // taskLiElement(newTask)
// }

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

// Lists initialization
const taskListTodo = []
const taskListDone = []

function setTaskList(newTask){

  //Só trata dos dados - JAVASCRIPT
  if(!newTask.isCompleted){
    taskListTodo.push(newTask)
    const idx = taskListDone.indexOf(newTask)
    if(idx > -1)
      taskListDone.splice(idx,1)
  }else{
    taskListDone.push(newTask)
    const idx = taskListTodo.indexOf(newTask)
    if(idx > -1)
      taskListTodo.splice(idx,1)
  }
  
  //Desenhar o elemento - HTML
  const listSelector = !newTask.isCompleted ? '#taskListTodo' : '#taskListDone'
  const ul = document.querySelector(listSelector)

  const li = createLiElementWithTask(newTask)

  ul.append(li)

}

// End Task List

// Create li element

function createLiElementWithTask(newTask){
  const liElement = document.createElement('li')

  liElement.classList.add('task_list__list_item')
  
  const icon = newTask.isCompleted ? 'fa-circle-check' : 'fa-circle'
  liElement.innerHTML = `
    <i class="fa-regular ${icon}"></i>
    <h4 class="task_list__list_item__content">${newTask.description}</h4>
    ${newTask.isCompleted ? '<i class="fa-regular fa-circle-xmark"></i>' : ''}
  `

  //Click que permite conclusão ou reversão da conclusão
  liElement.onclick = (event) => {
    console.log(event)
    newTask.toggleIsCompleted()
    setTaskList(newTask)
    liElement.remove()
    console.log(taskListTodo)
    console.log(taskListDone)
  }

  return liElement
}

// End Create li element

