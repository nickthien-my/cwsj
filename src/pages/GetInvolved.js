import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function getinvolved() {
  return (
    <Layout>
      <Seo
        title="Get Involved"
        description="Thinking about getting involved with mental health?"
      />

      <div className="container">
        <div className="row">
          <StaticImage
            src="../images/general/jumbo.jpg"
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Get Involved Header"
            className="img-fluid"
          />
        </div>
        <div className="pt-3 py-5">
          <div>
            <h1>GET INVOLVED</h1>
            <hr />
            <p className="fs-4 pb-3">
              Interested in getting involved in the community? Join us as a
              volunteer.
            </p>
            <a href="mailto:persatuanwirakasih@gmail.com">
              <button className="btn btn-primary btn-lg" type="button">
                Join Us!
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
