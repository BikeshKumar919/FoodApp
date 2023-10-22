import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import { useState } from 'react';
import Modal from '../Modal'
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar() {
const [cartview,setcartview]=useState(false)
let data=useCart();
const navigate=useNavigate();
const handlelogout=()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
}

  return(
    <div >
    <nav className="navbar navbar-expand-lg navbar-light " id="navcolor">
  <div className="container-fluid ">
   <Link className="navbar-brand fs-3 fst-italic kha" to="/">khAnA<span className='fs-6'>.com</span></Link>
  
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item">
          <Link className="nav-link active fs-6" aria-current="page" to="/">Home</Link>
        </li>
        {
          (localStorage.getItem("authToken"))?
          <li className="nav-item">
          <Link className="nav-link active fs-6" aria-current="page" to="/myOrder">MyOrders</Link>
        </li>
          :""
        }
      </ul>
      {(!localStorage.getItem("authToken"))?
          <div className='d-flex '>
          <Link className="btn bg-white text-success mx-1 fs-6  " to="/login">Login</Link>   
          <Link className="btn bg-white text-success mx-1 fs-6  " to="/Signup">Signup</Link>
          </div>
        :<div>
        <div  className="btn bg-white text-success mx-2 btn-sm " onClick={()=>{setcartview(true)}}>
          MyCart{ }<Badge pill bg="danger" id="badge">{data.length}</Badge>
          </div>
          {cartview?<Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
        <div  className="btn btn-outline-danger bg-danger text-white mx-2 btn-sm fs-6 " onClick={handlelogout}>Logout</div>
        </div>
      }
    </div>
  </div>
</nav>
    </div>
  )
}
