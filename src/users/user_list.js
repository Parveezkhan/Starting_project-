import React from 'react'
import Side_Nav from '../Layout/Side_Nav'



//import css
import '../styles/user_list.css'

const handleGetinputdata=(e)=>{
 e.preventDefault();
 console.log(e.target.search_data.value)
}

 const user_list = () => {
  return (
    <>
    <Side_Nav/>
    <div className='container2 p-2 container-fluid'>
      <div className='top-section d-flex flex-row justify-content-center my-3'>
      <div className="search_bar my-3">
         <form class="form-inline d-flex flex-row  justify-content-center" onSubmit={handleGetinputdata}>
       <input className="form-control mr-sm-1 search_form" name='search_data' type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success mx-4  " type="submit">Search</button>
  </form>
      </div>

      <div className='my-3'><a class="btn btn-primary" data-toggle="collapse" href="#addfield" role="button" aria-expanded="false" aria-controls="addfield">Toggle Add User</a>
      </div>
     <div className='my-3  d-flex justify-content-end'> 
      {/* <button className='btn btn-success '>+Add Field</button> */}
        
      <div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="addfield">
      <div class="card card-body add_field" >
        <input type='text' name='addfield' placeholder='Add Field' className='form-control'></input>
        <button type='button' className='btn btn-success my-2'>Add</button>
        </div>
    </div>
  </div>
      </div>
       

    </div> 

      </div>
      
 


    <table className="table table-hover border border-1 m-3 w-80">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address </th>
      <th scope='col'>Country</th>
      <th scope="col">City/State </th>
      <th scopr='col'>Last Access</th>
      <th scope='col'>Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>India</td>
      <td>@Bangalore</td>
      <td>1 day ago</td>
      <td>
        <div className='user_modification d-flex flex-row justify-content-start text-start'>
        <button type='button' className='btn btn-primary mx-1'>Edit</button>
        <button type='button' className='btn btn-danger mx-1'>Delete</button>
        
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>India</td>
      <td>@Bangalore</td>
      <td>1 day ago</td>
      <td>
        <div className='user_modification d-flex flex-row justify-content-start text-start'>
        <button type='button' className='btn btn-primary mx-1'>Edit</button>
        <button type='button' className='btn btn-danger mx-1'>Delete</button>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry</td>
      <td>Bird</td>
      <td>@twitter</td>
      <td>India</td>
      <td>@Bangalore</td>
      <td>1 day ago</td>
      <td>
        <div className='user_modification d-flex flex-row justify-content-start text-start'>
        <button type='button' className='btn btn-primary mx-1'>Edit</button>
        <button type='button' className='btn btn-danger mx-1'>Delete</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
   </div>
   </>
    
  )
}
export default user_list;
