const Banner = () => {
    return (
      <section className="container-fluid Banner gx-0">
        <div className="banner">
          <div className="container">
            <div className="banner-content text-center text-white">
              <h1 className="fw-bold">
                <big>Find Next Place To Visit</big>
              </h1>
              <p className="h4">Discover amzaing places at exclusive deals</p>
            </div>
            <div className="form-outer">
              <form>
                <div className="row mt-5 gx-0">
                  <div className="form-fields first-wrap col-lg-3 col-md-4 col-sm-12">
                    <input id="search" type="text" placeholder="Keywords" />
                    {/* <i class="bi bi-search"></i> */}
                  </div>
                  <div className="custom-select form-fields second-wrap col-lg-3 col-md-4 col-sm-12">
                    <select>
                      <option placeholder="" selected>Destinations</option>
                      <option>Africa Adventure</option>
                      <option>Asia</option>
                      <option>India</option>
                      <option>Europe</option>
                    </select>
                    <span className="custom-arrow"></span>
                  </div>
                  <div className="custom-select form-fields third-wrap col-lg-3 col-md-4 col-sm-12 ">
                    <select>
                      <option selected>Durations</option>
                      <option>1 Day Tour</option>
                      <option>2-4 Day Tour</option>
                      <option>7+ Day Tour</option>
                    </select>
                    <span className="custom-arrow"></span>
                  </div>
                  <div className="form-fields fourth-wrap col-lg-3">
                    <button>Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="banner-description">
            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="destination-img col-lg-3 col-md-2 col-sm-2">
                    <img src={require("./images/banner-discription1.png")}></img>
                  </div>
                  <div className="destination-content col-lg-9 col-md-10 col-sm-10">
                    <div>
                      <h4>700+ DESTINATIONS</h4>
                      <h5>
                        Our expert team handpicked all destinations in this site
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="destination-img col-lg-3 col-lg-2 col-md-2 col-sm-2">
                    <img src={require("./images/banner-discription2.png")}></img>
                  </div>
                  <div className="destination-content col-lg-9 col-md-10 col-sm-10">
                    <div>
                      <h4>BEST PRICE GUARANTEE</h4>
                      <h5>Price match within 48 hours of order confirmation</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="destination-img col-lg-3 col-md-2 col-sm-2">
                    <img src={require("./images/banner-discription3.png")}></img>
                  </div>
                  <div className="destination-content col-lg-9 col-md-10 col-sm-10">
                    <div>
                      <h4>TOP NOTCH SUPPORT</h4>
                      <h5>
                        We are here to help, before, during, and even after your
                        trip.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  