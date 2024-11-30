import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function BadgerBudsNavbar(props) {
    return <Navbar  bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>

            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">

                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}