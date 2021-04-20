import React from 'react'
import Product1 from "../Images/Product1.png";
import Product2 from "../Images/Product2.png";
import Product3 from "../Images/Product3.png";


function Product() {
    return (
      <div
        id="Products"
        className="container-fluid"
        style={{ backgroundColor: "#1e1e1e", padding: "60px" }}
      >
        <div className="container">
          <div className="row">
            <h2>Products</h2>
            <div className="row mt-3">
              <div className="col-lg-4 col-md-12">
                <div className="product-box card">
                  <img alt="Corn" src={Product1} />
                  <h4>Frozen Sweet Corn Kernel</h4>
                  <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Variety: Syngenta Sugar 75</h6>
                      <h6>Color: Golden Yellow</h6>
                      <h6>Temperature req: 18 Deg</h6>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Shelf life: One Year</h6>
                      <h6>Size: 8-10 mm</h6>
                      <h6>Brix: 12-14</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="product-box card">
                  <img alt="Corn" src={Product2} />
                  <h4>Frozen Sweet Corn Kernel</h4>
                  <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Variety: Syngenta Sugar 75</h6>
                      <h6>Color: Golden Yellow</h6>
                      <h6>Temperature req: 18 Deg</h6>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Shelf life: One Year</h6>
                      <h6>Size: 8-10 mm</h6>
                      <h6>Brix: 12-14</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="product-box card">
                  <img alt="Corn" src={Product3} />
                  <h4>Frozen Sweet Corn Kernel</h4>
                  <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Variety: Syngenta Sugar 75</h6>
                      <h6>Color: Golden Yellow</h6>
                      <h6>Temperature req: 18 Deg</h6>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                      <h6>Shelf life: One Year</h6>
                      <h6>Size: 8-10 mm</h6>
                      <h6>Brix: 12-14</h6>
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

export default Product
