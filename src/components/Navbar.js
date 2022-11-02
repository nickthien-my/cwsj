import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : { className: "nav-link" }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const eventLinks = [
  {
    text: "Talks/Webinars",
    url: "/events/talkswebinars",
  },
  {
    text: "Mental Health Awareness Campaigns",
    url: "/events/mentalhealthawarenesscampaigns",
  },
  {
    text: "Community Outreach",
    url: "/events/communityoutreach",
  },
  {
    text: "Education/Training",
    url: "/events/educationtraining",
  },
]

const links = [
  {
    text: "Media",
    url: "/media",
  },
  {
    text: "Get Involved",
    url: "/getinvolved",
  },
  {
    text: "Donate",
    url: "/donate",
  }
]

const Navbar = ({ siteTitle }) => {
  return (<>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <StaticImage
            src="../images/home.png"
            width={30}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Care Warriors Association"
            style={{ borderRadius: "15px" }}
            className="d-inline-block align-top"
          />{' '}{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
          aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" type="button" id="navbarLightDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Events
                  </a>
                  <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                    {eventLinks.map(link => (
                      <React.Fragment key={link.url}>
                        <li className="dropdown-item">
                          <ExactNavLink
                            to={link.url}
                          >
                            {link.text}
                          </ExactNavLink>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            {links.map(link => (
              <React.Fragment key={link.url}>
                <li className="nav-item">
                  <ExactNavLink
                    to={link.url}
                  >
                    {link.text}
                  </ExactNavLink>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
