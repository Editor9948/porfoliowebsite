import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g67v3es',
         'template_efkfkfs', form.current, {
        publicKey: 'G5ole9_1MTeUAQWk8',
      })
      e.target.reset()
  };
  return (
    <section className='contact_section' id="contact">
    <h2 className='section_title'>Get in touch</h2>
      <span className='section_subtitle'>Contact  Me</span>

      <div className='contact_container container grid'>
        <div className='contact_content'>
        <h3 className='contact_title'>Talk to me</h3>

        <div className='contact_info'>
         <div className='contact_card'>
            <i className='bx bx-mail-send contact_card-icon'></i>
             
             <h3 className='contact_card-title'>Email</h3>
             <span className='contact_card-data'>olotuoladapoayomide@gmail.com</span>

             <a href='mailto:olotuoladapoayomide@gmail.com.com' className='contact_button'> Write Me{" "}
                 <i className='bx bx-right-arrow-alt contact_button-icon'>
                </i></a>


          </div>


          <div className='contact_card'>
            <i className='bx bxl-whatsapp contact_card-icon'></i>
             
             <h3 className='contact_card-title'>Whatsapp</h3>
             <span className='contact_card-data'>+2348136096609</span>

             <a href='https://wa.me/qr/HQXNHDK4F3KSK1' className='contact_button'> Write Me{" "}
                 <i className='bx bx-right-arrow-alt contact_button-icon'>
                </i></a>


          </div>

          <div className='contact_card'>
            <i className='bx bxl-messenger contact_card-icon'></i>
             
             <h3 className='contact_card-title'>Messenger</h3>
             <span className='contact_card-data'>olotu oladapo</span>

             <a href='https://m.me/olotu.oladapo' className='contact_button'> Write Me{" "}
                 <i className='bx bx-right-arrow-alt contact_button-icon'>
                </i></a>


          </div>

         </div>
        </div>

        <div className='contact_content'>
            <h3 className='contact_title'>Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className='contact_form'>
            <div className='contact_form-div'>
              <label className='contact_form-tag'>Name</label>
              <input 
              type='text' 
              name='name' 
              className='contact_form-input' 
              placeholder='Insert your name'/>
            </div>

            <div className='contact_form-div'>
              <label className='contact_form-tag'>Mail</label>
              <input 
              type='email' 
              name='email' 
              className='contact_form-input' 
              placeholder='Insert your email'/>
            </div>

            <div className='contact_form-div contact_form-area'>
              <label className='contact_form-tag'>Projects</label>
              <textarea 
              name='project'
              cols='30'
              rows='10' 
              className='contact_form-input' 
              placeholder='Write your project'>
                </textarea>
            </div>
            <button className='button button-flex'> Send Message
              
              </button>
            </form>  
        </div>
      </div>
    </section>
  )
}

export default Contact