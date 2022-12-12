import React from "react";
import Associate from "./Associate";
import Award from "./Award";
import BestOffers from "./BestOffers";
import FliqaAssociates from "./FliqaAssociates";
import Footer from "./Footer";
import OurBlogs from "./OurBlogs";
import OurSuccess from "./OurSuccess";
import Photography from "./Photography";
import RealWedding from "./RealWedding";
import Testimonials from "./Testimonials";

function AllData() {
  return (
    <>
      <div className="text-center">
        <div className="all-data-img"></div>
        <h1 className=" mt-3">India's Leading Creative Platform</h1>
        <p>Experience hassle free bookings. Trusted by 2500+ Customers</p>
        <div className="all-data-search">
          <div className="all-data-search container mt-3 mb-5">
            <form className=" d-flex ">
              <input
                className="all-data-search-input  me-2  text-center"
                type="search"
                placeholder="Search service, blog and many more..."
              />
              <button className="all-data-search-button" type="button">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="all-data-card-img-main-div d-flex align-items-center">
          <div className="all-data-card-img-div">
            <div className="all-data-img-container d-flex align-items-center row">
              <img
                src="https://adbeesolutions.com/assets/img/social-image/social-media-marketing-company-in-trichy.png"
                class="all-data-card-img img-fluid rounded-start"
                alt="Not Found"
              />
              <h5 className="mt-3">Verified Reviews</h5>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="all-data-card-img-div">
            <div className="all-data-img-container d-flex align-items-center row">
              <img
                src="https://adbeesolutions.com/assets/img/social-image/social-media-marketing-company-in-trichy.png"
                class="all-data-card-img img-fluid rounded-start"
                alt="Not Found"
              />
              <h5 className="mt-3">Top Articles</h5>
              <p>Helps you decide</p>
            </div>
          </div>
          <div className="all-data-card-img-div">
            <div className="all-data-img-container d-flex align-items-center row">
              <img
                src="https://adbeesolutions.com/assets/img/social-image/social-media-marketing-company-in-trichy.png"
                class="all-data-card-img img-fluid rounded-start"
                alt="Not Found"
              />
              <h5 className="mt-3">Write Share Win Contest</h5>
              <p>Earn cash for review</p>
            </div>
          </div>
          <div className="all-data-card-img-div">
            <div className="all-data-img-container d-flex align-items-center row">
              <img
                src="https://adbeesolutions.com/assets/img/social-image/social-media-marketing-company-in-trichy.png"
                class="all-data-card-img img-fluid rounded-start"
                alt="Not Found"
              />
              <h5 className="mt-3">MouthShut For Brands</h5>
              <p>Request a demo</p>
            </div>
          </div>
        </div>

        <div>
          {/* ------------- */}
          <Associate />
          <OurBlogs />
          <RealWedding />
          <BestOffers />
          <Testimonials />
          <Award />
          <OurSuccess />
          <Photography />
          <FliqaAssociates />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AllData;
