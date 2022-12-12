import React from "react";

function Testimonials() {
  return (
    <>
      <div className=" d-flex justify-content-center mb-5">
        <div>
          <img
            src="https://www.ghyperlocal.com/assets/img/take-reputation.png"
            class="rounded float-start"
            alt="Not Found"
          />
        </div>
        <div>
          <div className="d-flex justify-content-start">
            <div>
              <h1 className="d-flex justify-content-start mx-3">
                Testimonials
              </h1>
              <p className="d-flex justify-content-start mx-3">
                Words from our clients.
              </p>
            </div>
            <div className="d-flex justify-content-end mx-5">
              <div>
                <button className="btn active btn-outline-dark mx-2 my-2">
                  Google
                </button>
                <button className="btn btn-outline-dark mx-2 my-2">
                  Facebook
                </button>
                <button className="btn btn-outline-dark mx-2 my-2">
                  Weddingwire
                </button>
                <button className="btn btn-outline-dark mx-2 my-2">
                  WedmeGood
                </button>
              </div>
            </div>
          </div>

          <div className=" d-flex align-items-end">
            <div className=" testimonial-card container d-flex justify-content-center">
              <div class="card text-bg-secondary mb-3 mx-3 mt-5">
                <div class="card-body d-flex align-items-end">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <b>~ Unknown</b>
                  </p>
                </div>
              </div>
              <div class="card text-bg-secondary mb-3 mx-3 mt-5">
                <div class="card-body d-flex align-items-end">
                  <p class="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <b>~ Unknown</b>
                  </p>
                </div>
              </div>
              <div class="card text-bg-secondary mb-3 mx-3 mt-5">
                <div class="card-body d-flex align-items-end">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <b>~ Unknown</b>
                  </p>
                </div>
              </div>
              <div class="card text-bg-secondary mb-3 mx-3 mt-5 ">
                <div class="card-body d-flex align-items-end ">
                  <p class="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <b>~ Unknown</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
