import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import End from './pages/End';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reset' element={<End/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
