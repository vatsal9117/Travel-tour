import OwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
import "owl.carousel/dist/assets/owl.theme.default.min.css";
const Review = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className=" container review-wraper">
      <div className="review-header text-center">
        <h3>Customer Reviews</h3>
      </div>
      <div className="review-card-carousel">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9  blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="r-card  text-balck">
              <div className="r-card-body">
                <div className="row">
                  <div className="col st">
                    <p>“</p>
                  </div>
                </div>
                <div className="row r-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row mt-3 ms-2">
                  <div className="col-lg-3 col-md-3 col-sm-3 img1">
                    <img
                      src={require("./images/reviewimg1.jpg")}
                      className=""
                    ></img>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 blog">
                    <h5>JOHN SMITH</h5>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star checked me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <span className="bi bi-star me-1"></span>
                    <p>Solo Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Review;
