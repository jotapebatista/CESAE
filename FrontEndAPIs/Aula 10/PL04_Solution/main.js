//Dados ou Estado
const person_list = []

//Referencias a elementos HTML
const person_form_element = document.querySelector('form')
const person_list_element = document.querySelector('ul')

person_form_element.onsubmit = submitHandler

//Eventos - Ações
function submitHandler(evt) {
  // 1
  evt.preventDefault();
  
  // 2
  //console.log(this) -> a palavra chave this representa o formulário
  const name = this.input_name.value
  const age = this.input_age.value
  const height = this.input_height.value
  const email = this.input_email.value
  const nationality = this.input_nationality.value

  // 3 Validar nome
  if(name == null || name === ''){
    alert('O nome é obrigatório !')
    return 
  }

  //Validar idade
  if(age == null || age <= 0){
    alert('A idade é obrigatória !')
    return 
  }

  //Validar altura
  if(height == null || height <= 0){
    alert('A altura é obrigatória !')
    return 
  }

  //Validar email
  if(email == null || email === '' ){
    alert('O email é obrigatório !')
    return 
  }

  //Validar nacionalidade
  if(nationality == null || nationality === ''){
    alert('A altura é obrigatória !')
    return 
  }

  //4 - preparar os dados
  const newPerson = new Person(name, age, height, email, nationality)

  //5 - BL - Adicionar ha lista
  addPersonToList(newPerson)

  //6 - Clean up
  evt.target.reset()

}

function addPersonToList(person){
  //Add JS
  person_list.push(person)
  
  //Add HTML
  const li = addPersonToRenderedList(person)

  person_list_element.appendChild(li)
}

function addPersonToRenderedList(person) {
  const liElement = document.createElement('li')

  //Configurar HTML
  liElement.innerHTML = `<h3>${person.toString()}</h3>`

  //Configurar CSS
  liElement.classList.add('list-group-item')

  //Configurar JS
  liElement.onclick = ()=>{
    alert(person.presentation())
  }

  return liElement
}