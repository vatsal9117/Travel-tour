const Feature = () => {
    return (  
        <div className="feature-wraper container-fluid">
            <div className="feature-heading text-center container">
                <h3>We are featured in</h3>
            </div>
            <div className="feature-content text-center container">
                <a href="#"><p>See what others are saying about us</p></a>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
                    <img src={require("./images/forbs.png")}></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
                    <img src={require("./images/cnbc.png")}></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
                     <img src={require("./images/wsj.png")}></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
                     <img src={require("./images/usa.png")}></img>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12 ms-4">
                    <img src={require("./images/new-york-tims.png")}></img>
                </div>
            </div>
        </div>    
    );
}
 
export default Feature;