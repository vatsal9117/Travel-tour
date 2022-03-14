import {
    FaPhoneAlt,
    FaFlickr,
    FaGooglePlusG,
    FaTwitter,
    FaUserAlt,
  } from "react-icons/fa";
  import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
  import { GrFacebookOption } from "react-icons/gr";
  import { AiOutlineLock } from "react-icons/ai";
  
  const Header = () => {
    return (
      <header className="container-fluid header-wrapper">
        <div className="row header">
          <div className="col-lg-10 col-md-10 col-sm-6 detalies">
            <div className="contact-header .d-lg-none">
              <ul>
                <i>
                  <FaPhoneAlt/>
                  <a href="contact">1.820.3345.33</a>
                </i>
                <i>
                  <HiOutlineMail className="email-icon"/>
                  <a href="email">Contact@TravelTourWP.com</a>
                </i>
              </ul>
            </div>
            <div className="social-Links-header">
              <ul>
                <i>
                  <GrFacebookOption/>{" "}
                </i>
                <i>
                  <FaFlickr/>
                </i>
                <i>
                  <FaGooglePlusG/>
                </i>
                <i>
                  <FaTwitter/>
                </i>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 detalies log">
            <div className="loginsign">
              <i>
             <HiOutlineLockClosed/>
              </i>
              <a href="login">Login</a>
              <i>
                <FaUserAlt  />
              </i>
              <a href="signup">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  export default Header;
  