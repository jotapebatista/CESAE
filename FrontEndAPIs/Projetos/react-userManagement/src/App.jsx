import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UserForm from './components/UserForm'
import UserList from './components/UserList';
import './App.css'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (


    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <UserForm />
        <hr />
        <UserList />
      </div>
    </ThemeProvider>
  )
}

export default App
