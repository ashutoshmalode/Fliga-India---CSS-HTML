import React from "react";

function BestOffers() {
  return (
    <div className="mb-5 pb-5">
      <div className="text-center mt-5">
        <h1 className="mx-3">Best Offers</h1>
        <p className="mx-3">
          Discover the best offers on our services.
        </p>
      </div>
      <div className="card-group px-5">
        <div className="card m-3 shadow-lg mb-5 bg-body rounded">
          <img
            src="https://images.pexels.com/photos/2119095/pexels-photo-2119095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top shadow-lg mb-6 bg-body rounded"
            alt="Not Found"
          />
          <div className="card-body">
            <a className="best-offer text-dark" href="/" rel="">
              <h5 className="card-title">BOOK NOW</h5>
            </a>
          </div>
        </div>
        <div className="card m-3 shadow-lg mb-5 bg-body rounded">
          <img
            src="https://i.pinimg.com/564x/4d/3d/ea/4d3dea72807c7c4889c96a57eecedb73.jpg"
            className="card-img-top shadow-lg mb-6 bg-body rounded"
            alt="Not Found"
          />
          <div className="card-body">
            <a className="best-offer text-dark" href="/" rel="">
              <h5 className="card-title">BOOK NOW</h5>
            </a>
          </div>
        </div>
        <div className="card m-3 shadow-lg mb-5 bg-body rounded">
          <img
            src="https://i.pinimg.com/736x/92/8b/1c/928b1c1a0aa721ead8218c35f8ea0a52--beach-girls-summer-girls.jpg"
            className="card-img-top shadow-lg mb-6 bg-body rounded"
            alt="Not Found"
          />
          <div className="card-body">
            <a className="best-offer text-dark" href="/" rel="">
              <h5 className="card-title">BOOK NOW</h5>
            </a>
          </div>
        </div>
        <div className="card m-3 shadow-lg mb-5 bg-body rounded">
          <img
            src="https://images.pexels.com/photos/2119095/pexels-photo-2119095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="card-img-top shadow-lg mb-6 bg-body rounded"
            alt="Not Found"
          />
          <div className="card-body">
            <a className="best-offer text-dark" href="/" rel="">
              <h5 className="card-title">BOOK NOW</h5>
            </a>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default BestOffers;
