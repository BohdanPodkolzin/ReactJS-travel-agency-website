import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './EmailForm.css';

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_0uwk0lj';
    const templateId = 'template_brdsn5p';
    const publicKey = 'NR21cF3zo2Uqc8xyR';

    const userParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ilya',
      message: message,
    };

    emailjs.send(serviceId, templateId, userParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <>
      <div className='small-bar'></div>
      <section className='email-form'>
        <h2 id="email-section" className='header-text'>Send us an email</h2>
        <div className='form-container'>
          <div className='form-text'>
            <p>Have any questions or suggestions? Feel free to send us an email!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
          </div>
          <form onSubmit={handleSubmit} className='emailForm'>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <button type="submit">Send Email</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default EmailForm
