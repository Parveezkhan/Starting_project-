import Login from './Pages/Login'
import Signup from './Pages/Signup.js';
import Home from './Layout/Home.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Calculate from './calculator/calculate.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/calculate' element={<Calculate/>}/>
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
