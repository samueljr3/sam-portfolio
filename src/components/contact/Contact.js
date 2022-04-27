import React from "react";
import "./Contact.css";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-wrapper">
        <div className="contact-links">
          <ContactInfoItem
            icon="fa-brands fa-github fa-2x"
            para="Checkout my github"
            link="https://github.com/samueljr3"
            name="github"
          />
          <ContactInfoItem
            icon="fa-brands fa-linkedin fa-2x"
            para="Connect with me"
            link="https://www.linkedin.com/in/samuelrivasramirez/"
            name="linkedin"
          />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
