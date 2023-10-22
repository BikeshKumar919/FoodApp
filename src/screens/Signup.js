import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [details, setdetails] = useState({ name: "", email: "", password: "", geolocation: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": details.name,
                "location": details.geolocation,
                "password": details.password,
                "email": details.email
            })
        })
        const json=await response.json();
        console.log(json)
        if(!json.success)
            alert("enter correct data")
    }
    const onChange = (e) => {
        setdetails({ ...details, [e.target.name]: e.target.value })
    }
    return (
        <div className='signup-container'>
            <h1 className='fs-3'>Sign Up!</h1>
            <div className='container' id="signup">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label try2">Name</label>
                        <input type="text" className="form-control " id="ok" name='name' value={details.name} onChange={onChange} />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label try">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='email' value={details.email} onChange={onChange} />
                       
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label try1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={details.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputaddress1" className="form-label try1">Address</label>
                        <input type="text" className="form-control" id="exampleInputaddress1" name='geolocation' value={details.geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success m-2">Submit</button>
                    <Link to="/login" className="btn btn-danger mx-3">Already a user</Link>
                </form>


            </div>
        </div>
    )
}
