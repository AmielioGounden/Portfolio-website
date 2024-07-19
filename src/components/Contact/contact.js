import React, { useRef } from 'react';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import LinkdinIcon from '../../assets/linkdin-icon.png';
import PinterestIcon from '../../assets/pinterest.png';
import './contact.css';
import emailjs from 'emailjs-com'; // Ensure correct import from 'emailjs-com'

const Contact = () => { // Component names should start with an uppercase letter
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_66fyq9r', 'template_lzhzmaz', form.current, 'v1LZs9zx41W-CLhtp') // Use your user ID here
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div className="contact">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below if there are any work opportunities for us to discuss</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name="from_name"/>
            <input type="email" className="email" placeholder='Your Email' name="from_email" />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            <div className="links">
            <a href="https://m.facebook.com/amielio.gounden/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="link" />
              </a>
              <a href="https://www.instagram.com/_amielio.g?igsh=YmN5OTR5b2g4eDhl" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="link" />
              </a>
              <a href="https://www.linkedin.com/in/amieliogounden" target="_blank" rel="noopener noreferrer">
                <img src={LinkdinIcon} alt="LinkedIn" className="link" />
              </a>
              <a href="https://pin.it/2wNV9Uyc9" target="_blank" rel="noopener noreferrer">
                <img src={PinterestIcon} alt="Pinterest" className="link" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; // Export with the first letter uppercase
