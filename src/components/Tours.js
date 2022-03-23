const Tours = () => {
    return (
      <div className="container popular-tour-wraper">
        <div className="popular-tour-heading text-center">
          <h3>Popular Tours</h3>
        </div>
        <div className="popular-tour-content text-center">
          <a href="abc">
            <p>
              View All Popular Tours<i className="ms-2 bi bi-arrow-right"></i>
            </p>
          </a>
        </div>
        <div className="row popular-tour-cards contaier-fluid">
          <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
            <div className="p-card">
              <div className="card-upper">
                <img src={require("./images/popular-tour1.jpg")} alt="tour1"></img>
              </div>
              <div className="card-body">
                <div className="video">
                <i class="bi bi-film video-icon"></i>
                </div>
                <div className="bestseller">
                  <label disabled>Best seller</label>
                </div>
                <div className="card-content">
                  <div className="row">
                    <div className="col-1">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                        </svg>
                    </i>
                    </div>
                    <div className="col-11">
                      <h4>Venice, Rome and Milan – 9 Days 8 Nights</h4>
                    </div>
                  </div>
                </div>
                <div className="card-service">
                  <div className="row">
                    <div className="col-lg-8 col-md-6  col-sm-9">
                      <p>
                        <i className="bi bi-clock-history me-2"></i>7 Days
                      </p>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star me-1"></span>
                      <span className="bi bi-star me-1">
                        <span className="review">(1 review)</span>
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-3">
                      <p>
                        <strike>$4,300</strike>
                        <br></br>
                        <big>$3,500</big>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12  mt-5">
            <div className="p-card">
              <div className="card-upper">
                <img src={require("./images/popular-tour2.jpg")} alt="tour2"></img>
              </div>
              <div className="card-body">
                 <div className="video">
                <i class="bi bi-film video-icon"></i>
                </div>
                <div className="bestseller">
                  <label disabled>Best seller</label>
                </div>
                <div className="card-content">
                  <div className="row">
                    <div className="col-1">
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                        </svg>
                    </i>
                    </div>
                    <div className="col-11">
                      <h4>Enquiry Form Only - Paris - 6 Days</h4>
                    </div>
                  </div>
                </div>
                <div className="card-service">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-9">
                      <p>
                        <i className="bi bi-clock-history me-2"></i>5 Days
                      </p>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star me-1"></span>
                      <span className="bi bi-star me-1">
                        <span className="review">(2 review)</span>
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-3">
                      <p>
                        <strike>$3,700</strike>
                        <br></br>
                        <big>$2,000</big>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
            <div className="p-card">
              <div className="card-upper">
                <img src={require("./images/popular-tour2.jpg")} alt="tour2"></img>
              </div>
              <div className="card-body third">
                <div className="bestseller">
                  <label disabled>Best seller</label>
                </div>
                <div className="card-content">
                  <div className="row">
                    <div className="col-12">
                      <h4>Two Capitals Tour of 7 days and 6 nights From Moscow</h4>
                    </div>
                  </div>
                </div>
                <div className="card-service">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-9">
                      <p>
                        <i className="bi bi-clock-history me-2"></i>7 Days
                      </p>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star checked me-1"></span>
                      <span className="bi bi-star me-1"></span>
                      <span className="bi bi-star me-1">
                        <span className="review">(1 review)</span>
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-3">
                      <p>
                        <strike>$4,300</strike>
                        <br></br>
                        <big>$3,500</big>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container discount text-center mt-5">
          <div className="row discount-row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center discount-content">
              <h3 className="mt-5">Enjoy Summer Deals</h3>
              <h2 className="mt-2">Up to 40% Discount!</h2>
              <a href="abc" className=""><label className="learn-more">Learn More</label></a>
              <br></br>
              <img src={require("./images/discount.png")} className="mt-5" alt="discount"></img>
              <i class="bi bi-search search"></i>
              <br></br>
              <small>
                <sub>*Terms applied</sub>
              </small>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 discount-img "></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Tours;
  