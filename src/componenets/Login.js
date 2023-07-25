import React from 'react'
import './home2.css'
const Login = () => {
  return (
    <>
  
<div className='mx-1'>
  <div class="row ">
    <div class="col-sm-7 col-md-5 login-img col-lg-7"><img className='login ml-5' src='/images/login.png' /></div>
    <div class="col-sm-5 col-md-5 offset-md-2 col-lg-5 offset-lg-0">
    <div className='loginfrm mx-5'>    
    <form>

    <p class="text-capitalize fs-2">Login to com name</p>
    <p class="text-capitalize">Enter your Details below</p>
  <div class="row mb-3 mt-5">
    {/* <label for="inputEmail3"  class="col-sm-2 col-form-label">Email</label> */}
    <div class="col-sm-10 eml u">
      <input type="email" placeholder="Email or Phone Number" class="form-control border-0 u" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    {/* <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label> */}
    <u></u>
    <div class="col-sm-10 u">
      <input type="password"placeholder="Password" class="form-control border-0 u" id="inputPassword3"/>
    </div>
  </div>
 <div className='row g-3 mt-5'>
  <div class="col-sm">
  <button type="submit" class="btn btn-danger">Log in</button>
  </div>
  <div class="col-sm">
  <button type="submit" class="btn btn-light">Forget Password</button>
  </div></div>


</form></div>


    </div>
  </div>
</div>


  {/* <div>   </div> */}
  
  </>
  )
}
export default Login