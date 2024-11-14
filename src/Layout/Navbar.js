import {Link} from 'react-router-dom';
import logo from "../images/Logo.png"

const Navbar=()=>{
   return (
    <navbar>
    <div className="navbar-logo">
    <nav className="navbar navbar-light bg-dark">
    <Link to="/" class="navbar-brand mb-0 h1 ">
    <img src={logo} className="d-inline-block align-top mx-2" alt='' style={{width:"50px",height:"50px"}}></img></Link>
    <div className="log-sin m-3">
        <Link to="/login" className="btn btn-primary mx-3 ">Login</Link>
        <Link to="/signup" className="btn btn-danger mx-3">Signup</Link>
    </div>
     </nav>
    </div>
    
</navbar>
   )

}
export default Navbar;