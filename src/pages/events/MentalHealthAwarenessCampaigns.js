import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

export default function mentalhealthawarenesscampaigns({ data }) {
  return (
    <Layout>
      <Seo
        title="Mental Health Awareness Campaigns"
        description="Mental Health Awareness Campaigns"
      />

      <div className="container">
        <h1 className="pt-5">MENTAL HEALTH AWARENESS CAMPAIGNS</h1>
        <hr />
        {data.allDataCampaignsJson.edges.map((entry, i) => (
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
            {i !== data.allDataCampaignsJson.edges.length - 1 && (
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
  query dataCampaignsQuery {
    allDataCampaignsJson {
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
