import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/chat' element={<Search renderTweets={renderTweets}/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
