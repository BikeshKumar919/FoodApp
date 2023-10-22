import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return(
    <div>
    <div className="container">
      <footer className="row row-cols-5 py-5 my-5 border-top">
        <div className="col"> <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none"></Link> <p class="text-muted">&copy; 2023  kHaNa ,Inc</p> </div>
        </footer>
        </div>
    </div>
  )
}
