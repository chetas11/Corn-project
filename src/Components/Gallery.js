import React from "react";
import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";
import Image4 from "../Images/Image4.png";
import Image5 from "../Images/Image5.png";
import Image6 from "../Images/Image6.png";
import Image7 from "../Images/Image7.png";

const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

function Gallery() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#333333" }}>
      <div className="container">
        <div className="row">
          <h2 className="mt-5">Gallery</h2>
          <div className="row text-center mt-4">
            {Images.map((image, tabIndex) => (
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="card m-2">
                  <img
                    id="GalleryImg" 
                    key={tabIndex}
                    src={image}
                    className="card-img-top"
                    alt="..."
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
