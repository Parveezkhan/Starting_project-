import Login from "./Pages/Login";
import Signup from "./Pages/Signup.js";
import Home from "./Layout/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculate from "./calculator/calculate.js";
import Clouds_card_container from "./Home_Components/Clouds_card_container.js";
import Side_Nav from "./Layout/Side_Nav.js";
import Service from "./Services/Service.js";
import { Account } from "./users/Account.js";
import User_List from "./users/user_list.js";
import Check_List from "./Services/check.js";
import Accounts from './users/Accounts.js'


//import context
import {EditUserContext,editContext} from '../src/Context/EditUserContext.js'
import {useAuth,AuthProvider} from '../src/Context/auth.js';

function App() {
  return (
    <>
    
    <EditUserContext>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/local/server" element={<Calculate />} />
          <Route path="/services" element={<Clouds_card_container />} />
          <Route path="/nav" element={<Side_Nav />} />
          <Route path="/services/:cloud" element={<Service />} />
          <Route path="/calculate" element={<Calculate />}></Route>
          <Route path="/account/create_user" element={<Account />}></Route>
          <Route path="/account/user_list" element={<User_List />} />
          <Route path='/account' element={<Account/>}/>
          <Route path="/check" element={<Check_List />} />
          <Route path="/accounts" element={<Accounts/>} />
        </Routes>
      </Router>
      </AuthProvider>
      </EditUserContext>
    </>
  );
}

export default App;
