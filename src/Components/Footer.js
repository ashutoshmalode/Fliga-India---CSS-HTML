import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <div clas></div>
          <div className="footer-background mt-5">
            <div className="footer-text mb-5">
              <h4 className="footer-headings">
                <i>Never miss a thing.</i>
              </h4>
              <div>
                <form class="footer-search d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Email Address"
                    aria-label="Search"
                  />
                  <button class="btn btn-warning" type="submit">
                    subscribe
                  </button>
                </form>
              </div>
              <p className="footer-para-strong my-3">
                <i>Be in touch</i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
