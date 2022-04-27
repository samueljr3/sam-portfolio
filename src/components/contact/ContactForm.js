import React from "react";

function ContactForm() {
  return (
    <div className="contact-right">
      <form className="contact-form">
        <label>
          Name:
          <input type="text" id="name" name="name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="johndoe@email.com" required />
        </label>
        <label>
          Message:
          <textarea type="text"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
