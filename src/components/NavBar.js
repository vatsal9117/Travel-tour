import { HiOutlineSearch } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

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
            <Nav.Link href="home" className="nav-links">HOME</Nav.Link>
            <Nav.Link href="pages" className="nav-links">PAGES</Nav.Link>
            <Nav.Link href="tour-list" className="nav-links">TOUR LIST</Nav.Link>
            <Nav.Link href="tour-search" className="nav-links">TOUR SEARCH</Nav.Link>
            <Nav.Link href="destination" className="nav-links">DESTINATION</Nav.Link>
            <Nav.Link href="tour-list" className="nav-links">DATEPRICE</Nav.Link>
            <Nav.Link href="blog" className="nav-links">BLOG</Nav.Link>
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
