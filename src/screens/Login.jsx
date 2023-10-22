//import React from 'react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
    const [details, setdetails] = useState({email: "", password: ""})
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/loginuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": details.password,
                "email": details.email
            })
        })
        const json=await response.json();
        console.log(json)
        if(!json.success)
            alert("enter correct data")
        else{
            localStorage.setItem("userEmail",details.email)
            localStorage.setItem("authToken",json.authToken)
            navigate("/")
        }
    }
    const onChange = (e) => {
      setdetails({ ...details, [e.target.name]: e.target.value })
  }
  document.body.classList.add('lbg');
  return(
    
    <div className='login-container'>
        
     <h1 className='fs-3 mb-2' id="test">Log In!</h1>
   <div class='container' id="login">
                
                <form onSubmit={handleSubmit} id='fbg'>
                    
                    <div className="mb-3" >
                        <label for="exampleInputEmail1" className="form-label try">Email address</label>
                        <input type="text" className="form-control" id="area" name='email' value={details.email} onChange={onChange} />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label try1">Password</label>
                        <input type="password" className="form-control" id="area" name='password' value={details.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success m-2">Submit</button>
                    <Link to="/Signup" className="btn btn-danger mx-3">Signup</Link>
                </form>
            </div>
    </div>
   
  )
}
