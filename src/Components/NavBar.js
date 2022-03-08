import { HiOutlineSearch } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navbar container">
      <Navbar bg="white" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <a href="#">
            <img className="img-fluid" src={require("./images/mainlogo.jpg")} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="collapse">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#pages">PAGES</Nav.Link>
            <Nav.Link href="#tour-list">TOUR LIST</Nav.Link>
            <Nav.Link href="#tour-search">TOUR SEARCH</Nav.Link>
            <Nav.Link href="#destination">DESTINATION</Nav.Link>
            <Nav.Link href="#tour-list">DATEPRICE</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a>
          <i>
            <HiOutlineSearch />
          </i>
        </a>
      </Navbar>
    </div>
  );
};

export default NavBar;
