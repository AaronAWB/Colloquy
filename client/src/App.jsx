import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '@Pages/index'
import { Chat } from '@Pages/index'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
