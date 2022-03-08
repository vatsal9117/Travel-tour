import {
    FaPhoneAlt,
    FaFlickr,
    FaGooglePlusG,
    FaTwitter,
    FaUserAlt,
  } from "react-icons/fa";
  import { HiOutlineMail } from "react-icons/hi";
  import { GrFacebookOption } from "react-icons/gr";
  import { AiOutlineLock } from "react-icons/ai";
  
  const Header = () => {
    return (
      <header className="container-fluid">
        <div className="row header">
          <div className="col-lg-9 col-md-9 col-sm-9 details">
            <div className="contact-header .d-lg-none">
              <ul>
                <i>
                  <FaPhoneAlt color=" #94999f" size="1.2rem" />
                  <a>1.820.3345.33</a>
                </i>
                <i>
                  <HiOutlineMail size="1.2rem" />
                  <a>contact@traveltourwp.com</a>
                </i>
              </ul>
            </div>
            <div className="social-Links-header">
              <ul>
                <i>
                  <GrFacebookOption size="1.2rem" />{" "}
                </i>
                <i>
                  <FaFlickr size="1.2rem" />
                </i>
                <i>
                  <FaGooglePlusG size="1.2rem" />
                </i>
                <i>
                  <FaTwitter size="1.2rem" />
                </i>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="loginsign">
              <i>
                <AiOutlineLock size="1.2rem" />
              </i>
              <a>Login</a>
              <i>
                <FaUserAlt size="1.2rem" />
              </i>
              <a>Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    );
  };
  export default Header;
  