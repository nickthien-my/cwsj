import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export default function media({ data }) {
  return (
    <Layout>
      <Seo
        title="Media"
        description="Here's some media associated with mental health"
      />

      <div className="container pt-5">
        <h1>ARTICLES</h1>
        <hr />
        <div className="row justify-content-md-center">
          {data.allDataMediaJson.edges.map(info => (
            <React.Fragment key={info.node.id}>
              <div className="col-lg-4 col-md-4 py-4">
                <div className="card">
                  <img
                    src={info.node.img.childImageSharp.fluid.src}
                    quality={95}
                    formats={["AUTO", "WEBP"]}
                    alt={info.node.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{info.node.name}</h5>
                    <p className="card-text">{info.node.summary}</p>
                    <a href={info.node.url} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query dataMediaQuery {
    allDataMediaJson {
      edges {
        node {
          id
          name
          summary
          url
          img {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
