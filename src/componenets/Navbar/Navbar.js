import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <><nav class="navbar navbar-expand-lg  navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand logo"  to="/">LOGO</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mx-5 val mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active link1" aria-current="page" to="/">Car Valuation</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link2" to="insurance">Car insurance</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link2" to="homesrvice">Car Financing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link2" to="insform">Car mechanic</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link link2 " to="insform1">Car Wash</Link>
          </li>
          <li class="nav-item mx-3">
            <Link class="nav-link ins1 ml-3" id='in1' to="insu2">Car Detailing </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link ins1" id='in1' to="contactus">Home based Services </Link>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link " to="insurance">Home based Services </Link>
          </li> */}
       
        </ul>
        <form class="d-flex bg-lgn">
          <input class="form-control me-2 border-0 pl-nav" type="search" placeholder="What are you looking for?" aria-label="Search"/>
          <button class="btn btn-outline-success lg-btn border-0" type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
       
          <ul class="navbar-nav me-auto mb-2 mx-3 mb-lg-0">
        
       
          <Link type="button" class="btn btn- btn-logn mx-3 btn-" to='/login'>Login </Link>
<Link type="button" class="btn btn- btn-signn btn-l ml-5 " to='/sinup'>SignUp </Link>

        </ul>
        </form>
      </div>
    </div>
  </nav></>
  )
}

export default Navbar