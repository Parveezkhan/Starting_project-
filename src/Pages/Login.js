import React from 'react';
import {  NavLink,Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import '../styles/login.css'
import logo from "../images/Logo.png"


const Login=()=>{
 
  
  return(
    <>
    <Navbar/>
    <div className='container'>
    
    <div className='user-credentials position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center'>
    <div className='logo  d-flex' >
           <img src={logo} alt='' className='logo1 ' style={{width:'150px' , height:'150px'}}></img>
        </div>
    <form  style={{width:'200px' }} className='form'>
  <div class="form-group m-2" >
    <label for="exampleInputEmail1" className='lab'>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email/username"/>
    
  </div>
  <div class="form-group m-2">
    <label for="exampleInputPassword1" className='pass'>Password</label>
    <input type="password" class="form-control mb-3" id="exampleInputPassword1" placeholder="Password"/>
  </div>
   <Link to='/'>
   <button type="submit" class="btn btn-primary m-2" style={{width:'250px'}}>Login</button></Link>
  <div className='last d-flex flex-column justify-content-center '>
  <div class="form-check mx-5">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Remember me
  </label>
</div>
<div className='forgot-password mx-5'>
    <Link to="/" className='mx-3 link' >Forgot password?</Link>
</div>
  </div>
  
</form>
    </div>
    
    </div>
    </>
  )
}
export default Login;