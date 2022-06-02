import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form action="">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" required validateOnBlur={true} />
        </div>
        <div>
          <label htmlFor="">Email Address:</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="">Message:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
