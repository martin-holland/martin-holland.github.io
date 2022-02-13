import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22h91ws",
        "template_4nnh5iv",
        form.current,
        "user_u9ltzLuwjLrnqSTJ53VrP"
      )
      .then(
        (result) => {
          alert("Email was sent " + result.text);
        },
        (error) => {
          alert("Email was not sent, Error: " + error.text);
        }
      );
  };

  return (
    <section id="contact">
      <form ref={form} onSubmit={sendEmail} className="container">
        <h3>Contact me</h3>
        <div className="form-group">
          <label htmlFor="first">First name</label>
          <input type="text" id="first" required name="first" />
        </div>
        <div className="form-group">
          <label htmlFor="last">Last name</label>
          <input type="text" id="last" required name="last" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" name="message"></textarea>
        </div>
        <input type="submit" value="Send message" id="submit" />
      </form>
    </section>
  );
}

export default Contact;
