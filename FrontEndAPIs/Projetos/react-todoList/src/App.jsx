import './App.css'
import Title from "./components/Title"
import InputNewTask from './components/TodoAdd'



function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <InputNewTask />
      </main>
    </div>
  )
}

export default App
