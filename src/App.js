import Login from './Pages/Login'
import Signup from './Pages/Signup.js';
import Home from './Layout/Home.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Calculate from './calculator/calculate.js';
import Clouds_card_container from './Home_Components/Clouds_card_container.js';
import Side_Nav from  './Layout/Side_Nav.js'
import Service  from './Services/Service.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/calculate' element={<Calculate/>}/>
        <Route path='/services' element={<Clouds_card_container/>} />
        <Route path='/nav' element={<Side_Nav/>} />
        <Route path='/services/:cloud' element={<Service/>}/>
      </Routes>
      
    </Router>
    
    </>
  );
}

export default App;
