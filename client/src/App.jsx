import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Chat from './pages/Chat'

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
