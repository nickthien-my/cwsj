import homeIcon from "./home.png";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function LayoutNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand><NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                    className="link-secondary">
                    <img
                        alt=""
                        src={homeIcon}
                        width="30"
                        height="30"
                        style={{ borderRadius: "15px" }}
                        className="d-inline-block align-top"
                    />{' '}
                    Care Warriors Association
                </NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Events" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink
                                    to="/events/talkswebinars"
                                    style={{ textDecoration: "none" }}
                                    className="link-secondary">
                                    Talks/Webinars
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink
                                    to="/events/mentalhealthawarenesscampaigns"
                                    style={{ textDecoration: "none" }}
                                    className="link-secondary">
                                    Mental Health Awareness Campaigns
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink
                                    to="/events/communityoutreach"
                                    style={{ textDecoration: "none" }}
                                    className="link-secondary">
                                    Community Outreach
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink
                                    to="/events/educationtraining"
                                    style={{ textDecoration: "none" }}
                                    className="link-secondary">
                                    Education/Training
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <NavLink
                                to="/media"
                                style={{ textDecoration: "none" }}
                                className="link-secondary">
                                Media
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/getinvolved"
                                style={{ textDecoration: "none" }}
                                className="link-secondary">
                                Get Involved
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/donate"
                                style={{ textDecoration: "none" }}
                                className="link-secondary">
                                Donate
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}