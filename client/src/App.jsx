import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Chat } from '@Pages/index'
import { withAuth }from '@Components/index'

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

export default withAuth(App)
