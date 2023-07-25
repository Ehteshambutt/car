import React from 'react'
import './Insu.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
const InsurForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jedlalh', 'template_alvikuc', form.current, '2HtYzoCIYRqMYFW2P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <><div className='bod'>


    <div class="bg-img"><button type="butto" class="ps text-light border-0">Contact Us</button>
      <form ref={form} onSubmit={sendEmail} class="contai cc position-absolute top-50 start-50 translate-middle">
      <div class="row g-3">
      <div class="col-sm-4">
        <input type="text" class="form-control " name="user_name" placeholder="Your Name" aria-label="City"/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Email" name="user_email" required/>
      </div>
      <div class="col-sm">
      <input type="text" placeholder="Your Phone" name="user_phone" required/>
      </div>
    </div>
    <div class="for">
      <textarea class="form-control" placeholder="Your message" id="floatingTextarea2" style={{"height": "200px"}}></textarea>
      
    </div>
    
    
        <button type="submit" value="Send" class="btl mt-3">Send Message</button>
      </form>
    </div>
    </div></>
  )
}

export default InsurForm