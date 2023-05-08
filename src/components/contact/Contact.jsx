import React from 'react'
import { HeaderSocials } from '../home/HeaderSocials'
import "./contact.css"

const Contact = () => {
  return (
   <section className="contact container section" id="contact">

   <h2 className="section__title" id='contactsmall'  style={{fontFamily:"cursive" }}>Get In Touch</h2>

    <div className="contact__container grid">


      <div className="contact__info">


        <h3 className="contact__title">Let talk about everything!</h3>
        <p className="contact__details">Send me an email.👋</p>
        <p  id="contact-email" >Email : dora1234priyanka@gmail.com</p>
        <p id="contact-phone" >Contact no :+91-6370503243</p>
        <HeaderSocials/>
        <img src="https://media.tenor.com/0ceXa2Dg8ywAAAAC/email-sent.gif" alt="sent img" />
       
      </div>
      
          <form action=""  className="contact__form" id='formscontact'>

            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" className="contact__form-input" 
                placeholder='Your name' />

              </div>

              <div className="contact__form-div">
                <input type="email" className="contact__form-input" 
                placeholder='Your email' />

              </div>

              <div className="contact__form-div">
                <input type="text" className="contact__form-input" 
                placeholder='Subject' />

              </div>

              <div className="contact__form-div contact__form-area">
                <textarea name="" id="" cols="30" rows="10"
                className='contact__form-input' placeholder='Write Your message'>

                </textarea>

              </div>
              <div className='btnsends'>
              <button className="btn " id='btnsend' >Send</button>

              </div>
             

              

            </div>
          </form>
        
      
    </div>
   </section>
  )
}

export default Contact