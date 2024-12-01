import React from 'react';
import '../css/contact.css'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out to us anytime.</p>
      </div>

      <section className="contact-info">
        <h2>Our Contact Information</h2>
        <ul>
          <li><strong>Address:</strong> 123 YOLO Street, Fashion City, FC 45678</li>
          <li><strong>Phone:</strong> +254 (78) 555-1234</li>
          <li><strong>Email:</strong> support@yolo.com</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label>
            Your Name:
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email Address:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Message:
            <textarea placeholder="Enter your message" rows="5" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
