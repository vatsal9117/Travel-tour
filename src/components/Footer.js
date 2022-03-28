const Footer = () => {
    return (
      <div className="footer-wrapper  container-fluid mt-5 gx-0">
        <div className="footer-upper">
          <div className="row container-fluid ">
            <div className="col-lg-3 col-sm-12 col-md-3 footer-upper-wraper">
              <div className="row call-us">
                <h3>Call Us</h3>
                <div className="row">
                  <div className="col-1  info">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="col  ms-2 info">
                    <p>+6-345-3456-233</p>
                  </div>
                </div>
                <div className="row call-us info">
                  <h3>Email</h3>
                  <p>Ask@traveltheme.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-3 about-us footer-upper-wraper">
              <div className="row">
                <h3>About Us</h3>
              </div>
              <div className="row">
                <ul>
                  <a href="ourstory">
                    <li>Our Story</li>
                  </a>
                  <a href="travel">
                    <li>Travel Blog & Tips</li>
                  </a>
                  <a href="work">
                    <li>Working With Us</li>
                  </a>
                  <a href="partner">
                    <li>Be Our Partner</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12 about-us footer-upper-wraper">
              <div className="row">
                <h3>Support</h3>
              </div>
              <div className="row">
                <ul>
                  <a href="support">
                    <li>Customer Support</li>
                  </a>
                  <a href="policy">
                    <li>Privacy & Policy</li>
                  </a>
                  <a href="details">
                    <li>Contact Channels</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-12 about-us footer-upper-wraper">
              <div className="row">
                <h3>Pay Safely With Us</h3>
              </div>
              <div className="row">
                <p>
                  The payment is encrypted and transmitted securely with an SSL
                  protocol.
                </p>
              </div>
              <div className="row  visa">
                <img src={require("./images/visa.png")} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower container-fluid">
          <div className="p3">
              <p>© 2019 Travel Tour All Rights Reserved.</p>
          </div>
          <div className=" footer-icons">
            <div className="row footer-icon-row m-0  ">
              <div className="col-lg-4 col-md-4 col-sm-4">
                    <p>Follow Us</p>
                  </div>
                  <div className="col-1 ms-1">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="col-1 ms-1">
                    <i className="bi bi-twitter"></i>
                  </div>
                  <div className="col-1 ms-1">
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div className="col-1 ms-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pinterest"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                    </svg>
                  </div>
                  <div className="col-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-vimeo"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z" />
                    </svg>
                  </div>
                </div>
              </div>  
            </div>
      </div>
    );
  };
  
  export default Footer;
  