import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from '@Pages/Login'
import {Chat} from '@Pages/Chat'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
