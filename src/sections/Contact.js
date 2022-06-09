import React from "react";
import emailjs from "emailjs-com";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_edoi9so",
        "template_76o5tha",
       e.target,
        "_p1G_hXwbJjniBTjq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
      alert("mail sent successfully")
  }
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="">Subject:</label>
          <input type="text" name="subject" required />
        </div>
        <div>
          <label htmlFor="">Email Address:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="">Message:</label>
          <textarea id="" cols="30" rows="10" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
