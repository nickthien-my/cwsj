import homeIcon from "./home.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function LayoutNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={homeIcon}
                        width="30"
                        height="30"
                        style={{ borderRadius: "15px" }}
                        className="d-inline-block align-top"
                    />{' '}
                    Care Warriors Association
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Events" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={"/events/talkswebinars"}>Talks/Webinars</NavDropdown.Item>
                            <NavDropdown.Item href="/events/mentalhealthawarenesscampaigns">Mental Health Awareness Campaigns</NavDropdown.Item>
                            <NavDropdown.Item href="/events/communityoutreach">Community Outreach</NavDropdown.Item>
                            <NavDropdown.Item href="/events/educationtraining">Education/Training</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/media">Media</Nav.Link>
                        <Nav.Link href="/getinvolved">Get Involved</Nav.Link>
                        <Nav.Link href="/donate">Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}