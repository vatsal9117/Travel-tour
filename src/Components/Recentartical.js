const Recent = () => {
    return (
      <div className="recent-artical-wraper container-fluid">
        <div className="recent-artical-heading text-center container">
          <h3>Recent Articles</h3>
        </div>
        <div className="recent-artical-content text-center container">
          <a href="#">
            <p>
              Read The Blog<i className="ms-2 bi bi-arrow-right"></i>
            </p>
          </a>
        </div>
        <div className="artical-cards container">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 artical-card mt-2 d-sm-block">
              <div className="card border-0 rounded-0">
                <img
                  className="card-img"
                  src={require("./images/artical2.jpg")}
                  alt="Card image"
                ></img>
                <div className="card-img-overlay">
                  <h3>How to travel with paper map</h3>
                  <p className="card-text">
                    June 6, 2016  • John Smith
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 artical-card mt-2 d-sm-block">
              <div className="card border-0 rounded-0">
                <img
                  className="card-img"
                  src={require("./images/artical1.jpg")}
                  alt="Card image"
                ></img>
                <div className="card-img-overlay">
                  <h3>How to travel with paper map</h3>
                  <p className="card-text">
                    June 6, 2016  • John Smith
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 artical-card mt-2 d-sm-block">
              <div className="card border-0 rounded-0">
                <img
                  className="card-img"
                  src={require("./images/artical3.jpg")}
                  alt="Card image"
                ></img>
                <div className="card-img-overlay">
                  <h3>How to travel with paper map</h3>
                  <p className="card-text">
                    June 6, 2016  • John Smith
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Recent;
  