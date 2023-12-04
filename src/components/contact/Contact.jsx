import React, { useState } from 'react';
import "./contact.css";
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgvljdq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section className="contact container section">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let’s Talk About Everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email <i className="fa-solid fa-hand-point-right fa-fw"></i>.{' '}
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=anandsingh14442@gmail.com'> 💌</a>
          </p>
        </div>

        <form
          action="https://formspree.io/f/mqkvvrjj"
          method="POST"
          className="contact__from"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="_replyto"
                className="contact__form-input"
                placeholder="Insert Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert Your Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div className="contact__form-div">
            <button type="submit" className="btn" disabled={state.submitting}>
              Send Message
            </button>
            <span className="btn-space"></span> {/* Add space using a span */}
            <button type="button" className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
