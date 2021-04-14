import React from 'react'

function Contact() {

    return (
      <div className="container-fluid contact-div">
        <div className="row">
          <div className="col-7 contact-col">
            <h2>Contact Us</h2>
            <div className="row mt-5">
              <div className="col-lg-6 col-sm-6 col-sm-12 col-12">
                <input className="inputs" autoFocus placeholder="Name" />
                <br />
                <br />
                <input type="email" className="inputs" placeholder="Email" />
                <br />
                <br />
                <input rows="0" className="inputs" placeholder="Your Message" />
              </div>
              <div className="col-lg-6 col-sm-6 col-sm-12 col-12">
                <input className="inputs" placeholder="Phone" />
                <br />
                <br />
                <input className="inputs" placeholder="City/Location" />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <button className="cto">
          <span>
            Let's Connect <i class="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>
    );
}

export default Contact
