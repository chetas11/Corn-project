import React from "react";

function Contact() {
  return (
    <div className="container-fluid contact-div">
      <form name="contact" method="POST" data-netlify="true">
        <div className="row">
          <div className="col-7 contact-col">
            <h2>Contact Us</h2>
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-6 col-sm-12 col-12">
                <input
                  className="inputs"
                  required
                  name="Name"
                  autoFocus
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
                  name="Contact Number"
                />
                <br />
                <br />
                <input
                  className="inputs"
                  placeholder="City/Location"
                  name="City/Location"
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
