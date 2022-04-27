import React from "react";
import "./Contact.css";

function ContactInfoItem({ icon, para, link, name, mari }) {
  return (
    <div className="contact-item">
      <a
        href={link}
        className={name}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
      >
        <i className={icon}></i>
      </a>
      <p>{para}</p>
    </div>
  );
}

export default ContactInfoItem;
