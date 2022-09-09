import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Aboutme() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cmrppq",
        "template_ibog4ib",
        form.current,
        "rrF5iIqQm0G7kBEMo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <h3>Contact Me</h3>
      <div className="cmContainer">
        <form action="" className="cmForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="text" placeholder="Last Name" name="last_name" />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" rows="10" cols="30" placeholder="Share your thoughts"></textarea>
          <button className="sendButton">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Aboutme;
