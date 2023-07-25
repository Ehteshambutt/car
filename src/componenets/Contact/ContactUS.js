import React from 'react'
import './contactus.css'
const ContactUS = () => {
  return (
    <><div className='bod'>


    <div class="bg-img ">
        

    <div class="row justify-content-center ">
    <div class="col-4  cc mt-5">
    <div class="card cont1" style={{"width": "28rem","margin-top":"5rem","background":"#FFFFFF"}}>
  <div class="card-body cont1">
    <h5 class="card-title text-start cont1"><i class="fa-sharp fa-solid faa fa-phone mx-3"></i>Call To Us</h5>
    <p class="card-text text-start ">We are available 24/7, 7 days a week.</p>
    <p  class=" text-start">Phone: +8801611112222</p>
    <p class="card-text text-start"><i class="fa-regular fa-envelope mx-3 faa"></i>Write To US</p>
    <p class="card-text text-start">Write To US Fill out our form and we will contact you within 24 hours.</p>
    <p class="card-text text-start">Emails: support@exclusive.com</p>
  </div>
</div>
    </div>





    <div class="col-4 mt-5">
    <form action="/action_page.php" class="contai cont1 ">
      <div class="row g-3">
      <div class="col-sm-4">
        <input type="text" class="form-control " placeholder="Your Name" aria-label="City"/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Email" name="email" required/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Phone" name="email" required/>
      </div>
    </div>
    <div class="for">
      <textarea class="form-control" placeholder="Your message" id="floatingTextarea2" style={{"height": "200px"}}></textarea>
      
    </div>
    
    
        <button type="submit" class="btl mt-3">Send Message</button>
      </form>
    </div>
  </div>   
    {/* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col ">
  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
  <div class="col cll">
    <div class="card">
    <form action="/action_page.php" class="contaip cc position-absolute top-50 start-50 translate-middle">
      <div class="row g-3">
      <div class="col-sm-4">
        <input type="text" class="form-control " placeholder="Your Name" aria-label="City"/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Email" name="email" required/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Phone" name="email" required/>
      </div>
    </div>
    <div class="for">
      <textarea class="form-control" placeholder="Your message" id="floatingTextarea2" style={{"height": "200px"}}></textarea>
      
    </div>
    
    
        <button type="submit" class="btl mt-3">Send Message</button>
      </form>
    </div>
  </div>
  
 
</div> */}
    </div>
    </div></>
  )
}

export default ContactUS