import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

export default function educationtraining({ data }) {
  return (
    <Layout>
      <Seo title="Education/Training" description="Education and Training" />

      <div className="container">
        <h1 className="pt-5">EDUCATION/TRAINING</h1>
        <hr />
        {data.allDataEducationTrainingJson.edges.map((entry, i) => (
          <React.Fragment key={entry.node.id}>
            <div className="pt-3 pb-5">
              <h3>{entry.node.name}</h3>
              <div className="row align-items-start">
                {entry.node.gallery.map(image => (
                  <React.Fragment key={image.name}>
                    <img
                      src={image.img.childImageSharp.fluid.src}
                      quality={95}
                      formats={["AUTO", "WEBP"]}
                      alt={image.name}
                      className="col-lg-4 py-3"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            {i !== data.allDataEducationTrainingJson.edges.length - 1 && (
              <>
                {" "}
                <hr />{" "}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query dataEducationTrainingQuery {
    allDataEducationTrainingJson {
      edges {
        node {
          id
          name
          gallery {
            img {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            name
          }
        }
      }
    }
  }
`
