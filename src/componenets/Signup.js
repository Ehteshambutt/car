import React from 'react'
// import './signup.css'
import './login.css'
const Signup = () => {
    return (
        <>
        
     


           <div className='mx-1 mgnt'>
                <div class="row ">
                    <div class="col-sm-7 col-md-5 login-img col-lg-7"><img className='login ml-5' src='/images/login.png' /></div>
                    <div class="col-sm-5 col-md-5 offset-md-2 col-lg-5 offset-lg-0">
                        <div className='loginfrm mx-5'>
                            <form>

                                <p class="text-capitalize fs-2"><strong>Login to com name</strong></p>
                                <figure class="text-center">
  <blockquote class="blockquote">
  <p class="text-capitalize text-start">Enter your Details below</p>
  </blockquote></figure>     
                                <div class="row mb-3 mt-5">

                                    <div class="col-sm-10 eml ">

                                        <div>
                                            <input type="text" placeholder="Name" class="form-control border-0 u mb-3     rounded" id="inputEmail3" />
                                        </div>

                                        <input type="email" placeholder="Email or Phone Number" class="form-control border-0 u mb-2" id="inputEmail3" />
                                    </div>
                                </div>
                                <div class="row ">


                                    <div class="col-sm-10 ">
                                        <input type="password" placeholder="Password" class="form-control border-0 u border-0 " id="inputPassword3" />
                                    </div>
                                </div>

                                <div class="d-grid gap-2 mt-5">
  <button class="btn btnc text-light" type="button">Create Account</button>
  <button class="btn btn-outline border" type="button">
    <img className='imgg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png'/
  ><i class="fa-brands fa-google "> </i> Sign Up with Google</button>
</div>
<div class=" text-center mt-3">
  <div class="row">
    <div class="col-sm-12">
    Already have account?<button class="btn btn-outline border-4" type="button">
   <img className='imgg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png'/
  > <a className='text-decoration-none u text-dark' href='#'>Login
  
  
  
  
  </a></button>
    </div>
   
  </div></div>
                      </form></div>


                    </div>
                </div>
            </div>



        </>
    )
}

export default Signup