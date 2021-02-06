import React from 'react';
import InfoCard from './common/InfoCard';
import "./Contact.css"


function Contact(props) {

    return (

        <div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" >Kontakt</h1>
            <div id="contact-photo" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" />
            <div className="contact-container" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                {/* <div className="contact-text-contaiinfo-cardner">
                    <div id="contact-1" className="contact-info">Feel free to contact me :)</div>
                    <div id='contact-2' className="contact-info">TEL: 579 870 405 </div>
                    <div id='contact-3' className="contact-info">E-mail: eng-empowering@gmail.com</div>
                    <div id='contact-4' className="contact-info">https://www.facebook.com/athlarster</div>
                </div> */}
                <div className="pricing-cards-container">
                    <a href="https://www.facebook.com/athlarster"><InfoCard containerClass="pricing-card info-card" header="Facebook" headerClass="pricing-header info-header" /></a>
                    <InfoCard containerClass="pricing-card info-card" header="579 870 405" mainText="" headerClass="pricing-header info-header tel-header" />
                    <InfoCard containerClass="pricing-card info-card" header="eng.empowering@gmail.com" headerClass="pricing-header info-header email-header" />
                </div>
            </div>
        </div>

    )
}

export default Contact;