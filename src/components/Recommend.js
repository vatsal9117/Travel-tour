const Recommend = () => {
    return (
      <div className="container Recommended-wraper">
        <div className="Recommended-heading text-center">
          <h3>Our Recommended</h3>
        </div>
        <div className="Recommended-content text-center">
          <a href="abc">
            <p>
              View All Popular Tours<i className="ms-2 bi bi-arrow-right"></i>
            </p>
          </a>
        </div>
        <div className="row Recommended-cards mt-3">
          <div className="col-lg-4 col-md-4 mt-5 col-sm-12">
            <div className="p-card">
              <div className="card-upper">
                <img src={require("./images/recomended1.jpg")} alt="recomended"></img>
              </div>
              <div className="card-body">
                <div className="card-content mt-5">
                  <div className="row">
                    <div className="col ">
                      <h4>Molokini and Turtle Arches Snorkeling Trip</h4>
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
                      <p className="from">
                        From<br></br>
                        <big>$3,500</big>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mt-5 col-sm-12">
            <div className="p-card">
              <div className="card-upper">
                <img src={require("./images/recomended2.jpg")} alt="recomended"></img>
              </div>
              <div className="card-body">
                <div className="card-content mt-5">
                  <div className="row">
                    <div className="col">
                      <h4>Molokini and Turtle Arches Snorkeling Trip</h4>
                    </div>
                  </div>
                </div>
                <div className="card-service">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-9">
                      <p>
                        <i className="bi bi-clock-history me-2"></i>4 Hours
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
                      <p className="from">
                        From<br></br>
                        <big>$80</big>
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
                <img src={require("./images/recomended.jpg")} alt="recomended"></img>
              </div>
              <div className="card-body third">
                <div className="bestseller">
                  <label disabled>Best seller</label>
                </div>
                <div className="card-content">
                  <div className="row">
                    <div className="col-1">
                      <i className="bi bi-lightning-fill"></i>
                    </div>
                    <div className="col">
                      <h4>Molokini and Turtle Arches Snorkeling Trip</h4>
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
                      <p className="from">
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
      </div>
    );
  };
  
  export default Recommend;
  