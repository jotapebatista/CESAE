import './App.css'
import Title from "./components/Title"
import TodoList from './components/TodoList'
import ToDoList from './components/EnterTask'

function App() {
  return (
    <div className="App">
      <header>
        {/* <Title /> */}
      </header>
      <main>
        <TodoList />
        {/* <TodoList /> */}
      </main>
    </div>
  )
}

export default App
