const Feature = () => {
    return (
      <div className="feature-wraper container-fluid">
        <div className="feature-heading text-center container">
          <h3>We are featured in</h3>
        </div>
        <div className="feature-content text-center container">
          <a href="abc">
            <p>See what others are saying about us</p>
          </a>
        </div>
        <div className="row feature-img ms-4 me-4 ">
          <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
            <img src={require("./images/forbs.png")} alt="img" className="img-fluid"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
            <img src={require("./images/cnbc.png")}alt="img"className="img-fluid"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
            <img src={require("./images/wsj.png")}alt="img"className="img-fluid"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
            <img src={require("./images/usa.png")}alt="img"className="img-fluid"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
            <img src={require("./images/new-york-tims.png")}alt="img"className="img-fluid"></img>
          </div>
        </div>
      </div>
    );
  };
  
  export default Feature;
  