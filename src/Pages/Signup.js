import React, { useEffect, useState } from 'react';
import {  NavLink,Link, Navigate  } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import '../styles/login.css'
import logo from "../images/Logo.png"



const Signup=()=>{
 
  const [data,setData]=useState({
    name:"",
    password:"",
    confirm_password:"",
  })
  const [navigate,setNavigate] = useState('')
  const handleData=(e)=>{
      e.preventDefault();
      data.name=e.target.email.value;
      data.password=e.target.password.value;
      data.confirm_password=e.target.confirm_password.value;
      console.log(data)
    {e.target.password.value === e.target.confirm_password.value &&  // Save data to local storage
      localStorage.setItem('credentials', JSON.stringify(data));
      
    }
    
    }
  

  return(
    <>
    <Navbar/>
    <div className='container'>
    
    <div className='user-credentials position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center'>
    <div className='logo  d-flex' >
           <img src={logo} alt='' className='logo1 ' style={{width:'150px' , height:'150px'}}></img>
        </div>
    <form  style={{width:'200px' }} className='form' onSubmit={handleData}>
  <div class="form-group m-2" >
    <label for="email" className='lab'>Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email/username" />
    
  </div>
  <div class="form-group m-2">
    <label for="password" className='pass'>Password</label>
    <input type="password" class="form-control mb-3" id="password" placeholder="Password" />
  </div>

  <div class="form-group m-2">
    <label for="confirm_password" className='pass'>Confirm Password</label>
    <input type="password" class="form-control mb-3" id="confirm_password" placeholder="Confirm Password" />
  </div>
  
   <button type="submit" class="btn btn-primary m-2" style={{width:'250px'}}>Signup</button>

  
  <div className=' mx-4'>
    <Link to="/login" className='mx-3 link' >Already registered?.signin</Link>
</div>
</form>
    </div>
    
    </div>
    </>
  )
}
export default Signup;