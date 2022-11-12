import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function talkswebinars({ data }) {
  console.log(data)
  return (
    <Layout>
      <Seo title="Talks/Webinars" description="Talks and Webinars" />

      <div className="container">
        <h1 className="pt-5">TALKS/WEBINARS</h1>
        <hr />
        {data.allDataTalksWebinarsJson.edges.map((info, i) => (
          <React.Fragment key={info.node.id}>
            <div className="pt-3 pb-5">
              <div className="row d-flex flex-column-reverse flex-lg-row align-items-start">
                <div className="col-lg-6">
                  <div className="pb-3">
                    <h3>{info.node.title}</h3>
                    <h4>{info.node.subtitle}</h4>
                    <h4 className="text-muted">{info.node.datetime}</h4>
                    <h5>{info.node.location}</h5>
                  </div>
                  <div>
                    {info.node.body.map(detail => (
                      <React.Fragment key={detail.text}>
                        <p>{detail.text}</p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6 pb-3">
                  <img
                    src={info.node.img.childImageSharp.fluid.src}
                    quality={95}
                    formats={["AUTO", "WEBP"]}
                    alt={info.node.title}
                    layout="fixed"
                    width={500}
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </div>
            </div>
            {i !== data.allDataTalksWebinarsJson.edges.length - 1 && (
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
  query dataTalksWebinarsQuery {
    allDataTalksWebinarsJson {
      edges {
        node {
          id
          title
          subtitle
          datetime
          img {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          body {
            text
          }
        }
      }
    }
  }
`
