import { Route, Routes } from 'react-router-dom';
import { Login, Chat } from '@Pages/index'
import { withAuth }from '@Components/index'

function App() {
  
  return (
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Chat />}></Route>
      </Routes>
  )
}

export default withAuth(App)
