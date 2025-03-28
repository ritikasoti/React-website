import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'


const Contact = () => {
  return (
    <div className='contact' >
        <div className="contact-col">
<h3>Send us a message <img src={msg_icon} alt='' /> </h3>
<p>Feel free to contact us </p>
<ul>
    <li><img src={mail_icon} alt=''/> Contact@abc.in</li>
    <li><img src={phone_icon} alt=''/> +91-123456</li>
    <li><img src={location_icon} alt=''/> New Delhi, India</li>
</ul>

        </div>
        <div className="contact-col">
<form>
<label> Your name</label>
<input type='text' name='name'placeholder='Enter your name' />
<label> Phone number</label>
<input type='tel' name='phone'placeholder='Enter your phone number' />
<label> Write your message</label>
<textarea name='message' rows='6' placeholder='' ></textarea>
<button type='submit'className='btn dark-btn'>Submit now</button>
</form>
        </div>
      
    </div>
  )
}

export default Contact
