import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function () {
  return (
    <div className='done'>
        <h1>Order Placed Successfully !!!</h1>
        <h2>Type of payment available : Cash On Delivery</h2>
        <Link to="/" className="btn btn-danger m-3">Back to Home Page</Link>
    </div>
  )
}
