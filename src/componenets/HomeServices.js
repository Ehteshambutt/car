import React from 'react'
import './home.css'
const HomeServices = () => {
  return (
    <>
      <div class="containe">
        <img src="/images/Home.png" className='hmimg1' id="ww" alt="Snow" style={{ }} />
        <div class="centered text1"><span><div class="card border-0" style={{
          "width": "Hug (825px)", "height": "Hug (292.47px)", "background": "none"
        }}>
          <div class="card-body ml-5 crd">
            <h5 class="card-title text-start " style={{ "font": "Helvetica Neue", "fontWeight": '700', "fontSize": "54px", }}>
              <span>We offer you top home base
                services for your car</span></h5>
            <p class="card-text mb-5 mt-4" style={{
              "font": "Helvetica Neue", "fontWeight": "400",
              "fontSize": "20px", "lineHeight": "30px", "letterSpacing": "-0.1 px"
            }}><span  >Get organized.Get business.Get paid</span><br />
              <span> Get back to the work that drives you</span></p>
            <a href="#" class="btn btn-primary bottom-0 start-0 btnps position-absolute " style={{
              "background": "#950000", "width": "Hug (142.41px)"
              , "height": " Hug (51px)", "padding": "11px 23.40625px 13px 20px", "border-radius": "4px", "border": "1px"
            }}>Get Started</a>
          </div>
        </div></span></div>
      </div>


      <div className='hm mb-5' >
        <div class="card text-center mt-5 border-0">

          <div class="card-body border-0">
            <h5 class="border-0 card-title special text-center position-absolute top-0 start-50 translate-middle">
              Valuation by expert</h5>
            <p class="card-text sub position-absolute top-50 start-50 translate-middle mt-5">
              To streamline your work, our unique technology intelligently integrates each aspect of your business management efforts so that you can eliminate inefficiencies across your business operations.
            </p>

          </div>
        </div>
      </div>

      <br /><br />





      <div className='mx-4 mgtp mggn  ' style={{ "border": "1px solid #dee2e6  ", "padding-all": "0px", }}>
       
        <div class="row mt-5 p-0 mx-0 border-0 ">
          <div class="col-sm-6 ">
            <div class="card mgn border-0 ">
              <div class="card-body ">
              
                <p class="card-text  mt- ">
               <p className='hp mt-3'>Our team contact you</p> 
                <div class="col-12">
    <label for="inputAddress" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>
  <div class="col-12 mt-4">
    <label for="inputAddress2" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" />
  </div>
  <div class="col-12 mt-4">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="number" />
  </div>
  <div class="mb-1 mt-4">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea><br/> <a href="#"className='btnpsn mt-5' >Submit</a>
</div>
                </p>

              </div>
            </div>
          </div>
          <div class="col-sm-6 cd">
            <div class="card mln border-0">
              <div class="card-body imgcar"><img className='imgcar ml-5' src='images\car.png' />

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeServices