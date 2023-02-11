import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat'
import Login from './pages/Login'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
