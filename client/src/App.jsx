import { Route, Routes } from 'react-router-dom';
import { Login, Chat } from '@Pages/index'
import { withAuth }from '@Components/index'

function App({ token, loaded }) {
  
  return (
      <Routes>
        <Route path='/login' element={<Login token={ token } loaded={ loaded } />}></Route>
        <Route path='/*' element={<Chat token={ token } loaded = { loaded } />}></Route>
      </Routes>
  )
}

export default withAuth(App)
