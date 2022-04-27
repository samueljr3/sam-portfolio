import React from "react";

function ContactForm() {
  return (
    <div className="contact-right">
      <form className="contact-form">
        <label>
          Name:
          <input type="text" id="name" name="name" placeholder="name"/>
        </label>
        <label>
          Email:
          <input type="email" placeholder="email" required />
        </label>
        <label>
          Message:
          <textarea type="text" placeholder="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
