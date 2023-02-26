import { Nav, Navbar, NavLink,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" fixed='top' >
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Acceuil</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/evenement">Evénements</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/photos">Photos</NavLink>
                    <NavLink  eventKey="1" as={Link} to="/videos">Videos</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Contact</NavLink>
                    <NavDropdown title="Commissions" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sport">Sport</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/culture">Culture </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sociale">Sociale</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/femmesenfants">Femmesenfants  </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/media">Communication</NavDropdown.Item>
            </NavDropdown>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;