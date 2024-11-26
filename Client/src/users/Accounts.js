import React from 'react'

//import components
import Side_Nav from '../Layout/Side_Nav'

//import css
import '../styles/Account.css'
import { Container } from 'react-bootstrap';

 const Accounts = () => {
  return (
  <>
  <Side_Nav/>
  <div className='container2 '> 
    <div className='container-fluid p-2 '>
       <div className='content border border-2 bg-light' style={{width:"400px",height:"400px"}}>

       </div>
    </div>
  </div>
  </>
    
  
  )
}
export default Accounts;
