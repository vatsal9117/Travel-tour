const Destination = () => {
    return (
      <div className="container-fluid destination">
        <div className="popular-destination text-center">
          <h2>Popular Destination</h2>
        </div>
        <div className="popular-destination text-center">
          <a href="abc">
            <p>
              View All Destinations<i className="ms-2 bi bi-arrow-right"></i>
            </p>
          </a>
        </div>
        <div className="destination-cards container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm- 12 destination-card">
              <div className="ui-card">
                <img
                  src={require("./images/Destination1.jpg")}
                  className="img-fluid" alt="destination1"
                ></img>
                <label className="destination-button">3 Hours</label>
                <div className="description">
                  <h3>Western Europe</h3>
  
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                    Separate.
                  </p>
                  <a href="all">View All Tours</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12 destination-card">
              <div className="ui-card">
                <img
                  src={require("./images/Destination2.jpg")}
                  className="img-fluid" alt="destination1"
                ></img>
                <label className="destination-button">2 Hours</label>
                <div className="description1">
                  <h3>Scandinavia</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                    Separate.
                  </p>
                  <a href="all">View All Tours</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm- 12 destination-card mt-3">
                <div className="card rounded-0 border-0">
                  <img alt="destination1"
                    src={require("./images/Destination5.jpg")}
                    className="img-fluid"
                  ></img>
                  <label className="destination-button">5 Hours</label>
                  <div className="description">
                    <h3>Western Europe</h3>
  
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separate.
                    </p>
                    <a href="all">View All Tours</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 destination-card mt-3">
                <div className="card rounded-0 border-0">
                  <img alt="destination1"
                    src={require("./images/Destination3.jpg")}
                    className="img-fluid"
                  ></img>
                  <label className="destination-button">4 Hours</label>
                  <div className="description">
                    <h3>Scandinavia</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separate.
                    </p>
                    <a href="all">View All Tours</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4 col-sm-12 destination-card mt-3">
                <div className="card rounded-0 border-0">
                  <img src={require("./images/Destination4.jpg")} alt="destination1"></img>
                  <label className="destination-button">2 Hours</label>
                  <div className="description">
                    <h3>Scandinavia</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separate.
                    </p>
                    <a href="all">View All Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Destination;
  