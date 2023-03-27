import { Route, Routes } from 'react-router-dom';
import { Login, Chat } from '@Pages/index'
import { withAuth }from '@Components/index'

function App({ confirm, loaded }) {
  
  return (
      <Routes>
        <Route path='/login' element={<Login confirm={ confirm } loaded={ loaded } />}></Route>
        <Route path='/*' element={<Chat confirm={ confirm } loaded = { loaded } />}></Route>
      </Routes>
  )
}

export default withAuth(App)
