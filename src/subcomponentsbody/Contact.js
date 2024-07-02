import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formRefresh, setFormRefresh] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pgb9mrw', 'template_2jpn5lj', form.current, 'DmZXOmS7yvK6TZ0Bn')
    .then((result) => {
        console.log(result.text);
        alert("Message Sent");
    }, (error) => {
        console.log(error.text);
    });

    setFormRefresh(true);
    setTimeout(() => {
      setFormRefresh(false);
    }, 0);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        CONTACT <span>US!</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="box">
          <input
            type="text"
            id="Full Name"
            placeholder="Full Name"
            name="user_name"
            value={formRefresh ? '' : undefined}
          />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            name="user_email"
            value={formRefresh ? '' : undefined}
          />
        </div>
        <div className="box">
          <input
            type="text"
            id="Mobile No."
            placeholder="Mobile No."
            value={formRefresh ? '' : undefined}
          />
          <input
            type="text"
            id="E-mail Subject"
            placeholder="E-mail Subject"
            value={formRefresh ? '' : undefined}
          />
          <textarea
            name="message"
            id="messagess"
            cols={30}
            rows={10}
            placeholder="Your message"
            value={formRefresh ? '' : undefined}
          />
          <button type="submit" className="btn" value="Send">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;