import React from "react";
import emailjs from "emailjs-com";

const sendEmail = (e) =>{
e.preventDefault();

emailjs
  .sendForm(
    "service_z8084ya",
    "template_7xurc7i",
    e.target,
    "user_Fc2ORScagMKWtgUjfdDFi"
  )
  .then(
    (result) => {
      console.log(result.text);
      alert("Thank you will reach out to you shortly")
    },
    (error) => {
      console.log(error.text);
      alert("Error occured try again after some time");
    }
  );
  e.target.reset()
}

function Contact() {
  return (
    <div className="container-fluid contact-div">
      <form
        name="contact"
        onSubmit={sendEmail}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="row">
          <div className="col-7 contact-col">
            <h2>Contact Us</h2>
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-6 col-sm-12 col-12">
                <input
                  className="inputs"
                  required
                  name="Name"
                  placeholder="Name *"
                />
                <br />
                <br />
                <input
                  required
                  type="email"
                  name="Email"
                  className="inputs"
                  placeholder="Email *"
                />
                <br />
                <br />
                <textarea
                  rows="1"
                  className="inputs"
                  placeholder="Your Message"
                  name="Message"
                />
                <br />
                <br />
              </div>
              <div className="col-lg-6 col-sm-6 col-sm-12 col-12">
                <input
                  required
                  className="inputs"
                  placeholder="Phone *"
                  name="Contact_Number"
                />
                <br />
                <br />
                <input
                  className="inputs"
                  placeholder="City/Location"
                  name="Location"
                />
                <br />
                <br />
                <div data-netlify-recaptcha="true"></div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="cto">
          <span>
            Let's Connect <i class="fas fa-arrow-right"></i>
          </span>
        </button>
      </form>
    </div>
  );
}

export default Contact;
