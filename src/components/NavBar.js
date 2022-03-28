import { HiOutlineSearch } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar,NavLink } from "react-bootstrap";


const NavBar = () => {
  return (
    <div className="navbar container-fluid">
      <Navbar bg="white" sticky="top" expand="md" collapseOnSelect clss>
        <Navbar.Brand> 
          <a href="abc">
            <img className="" src={require("./images/mainlogo.jpg")} alt="logo"  width="250" height="70"/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="collapse">
          <Nav>
            <NavLink  exact to={"/"} className="nav-links" activeClassName="selected">HOME</NavLink>
            <NavLink to="pages" className="nav-links">PAGES</NavLink>
            <NavLink to="tour-list" className="nav-links">TOUR LIST</NavLink>
            <NavLink to="tour-search" className="nav-links">TOUR SEARCH</NavLink>
            <NavLink  to={"/Destination"} className="nav-links"  activeClassName="selected">DESTINATION</NavLink>
            <NavLink to="tour-list" className="nav-links">DATEPRICE</NavLink>
            <NavLink to="blog" className="nav-links">BLOG</NavLink>
          </Nav>
        </Navbar.Collapse>
        <a href="search">
        <i className="bi bi-search"></i>
        </a>
      </Navbar>
    </div>
  );
};

export default NavBar;
