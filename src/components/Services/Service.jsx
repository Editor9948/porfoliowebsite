import React, { useState } from 'react'
import './Service.css'

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
       setToggleState(index);
  };

  return (
    <section id='services'>
      <h2 className='section_title'>Services</h2>
        <span className='section_subtitle'>What I Offer</span>
        
        <div className='services_container container grid'>
            <div className='services_content'>
              <div>
              <i className='uil uil-web-grid service_icon'></i>
              <h3 className='service_title'>Product <br /> Designer</h3>
              </div>
                 
              <span className='service_button' onClick={() => toggleTab(1) }>
                 view more
                 <i className='uil uil-arrow-right services_button-icon'> </i></span>

        <div className={toggleState === 1 ? "services_modal active-modal" : 
          "services_modal"}>
          <div className='services_modal-content'>
            <i onClick={() => toggleTab(0)}className='uil uil-times services_modal-close'></i>
            <h3 className='service_modal-title'>Product Designer </h3>
            <p className='service_modal-description'>Service with more
              than 3 years of experience. providing quality  work to 
              clients and companies</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I develop the user interface.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I create ux element interaction.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I position your company brand.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Design and mockups of products for companies.</p>
                </li>

              </ul>
              </div> 
            </div>
           </div>
           <div className='services_content'>
              <div>
              <i className='uil uil-arrow service_icon'></i>
              <h3 className='service_title'>Ui/Ux<br /> Designer</h3>
              </div>
                 
              <span onClick={() => toggleTab(2) }className='service_button'>
                view more
                 <i className='uil uil-arrow-right services_button-icon'> </i></span>

        <div className={toggleState === 2 ? "services_modal active-modal" : 
          "services_modal"}>
          <div className='services_modal-content'>
            <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>
            <h3 className='service_modal-title'>Ui/Ux Designer </h3>
            <p className='service_modal-description'>Service with more
              than 3 years of experience. providing quality  work to 
              clients and companies</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I develop the user interface.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I create ux element interaction.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I position your company brand.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Design and mockups of products for companies.</p>
                </li>

              </ul>
              </div> 
            </div>
           </div>
           <div className='services_content'>
              <div>
              <i className='uil uil-edit-alt service_icon'></i>
              <h3 className='service_title'>Visual <br /> Designer</h3>
              </div>
                 
              <span onClick={() => toggleTab(3) } className='service_button'>view more
                 <i className='uil uil-arrow-right services_button-icon'> </i></span>

        <div className={toggleState === 3 ? "services_modal active-modal" : 
          "services_modal"}>
          <div className='services_modal-content'>
            <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>
            <h3 className='service_modal-title'>Visual Designer</h3>
            <p className='service_modal-description'>Service with more
              than 3 years of experience. providing quality  work to 
              clients and companies</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I develop the user interface.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Web page development.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I create ux element interaction.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">I position your company brand.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="serivices_modal-info">Design and mockups of products for companies.</p>
                </li>

              </ul>
              </div> 
            </div>
           </div>
        </div>


    </section>
  )
}

export default Service