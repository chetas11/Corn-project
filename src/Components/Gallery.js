import React from "react";
import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";
import Image4 from "../Images/Image4.png";
import Image5 from "../Images/Image5.png";
import Image6 from "../Images/Image6.png";
import Image7 from "../Images/Image7.png";


function Gallery() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#1e1e1e", padding: "60px" }}
    >
      <div className="container">
        <div className="row">
          <h2>Gallery</h2>
          <div className="col-lg-12 col-md-12 mt-4">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image6} alt="Corn" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image2} alt="Corn" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image4} alt="Corn" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image7} alt="Corn" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image1} alt="Corn" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image5} alt="Corn" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="img-box card">
                        <img src={Image3} alt="Corn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
