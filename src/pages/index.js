import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CoreValues from "../components/CoreValues"
import TeamMembers from "../components/TeamMembers"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Homepage of Care Warriors Association" />

    <div className="container px-2 pb-5">
      <div className="row d-flex flex-column-reverse flex-lg-row align-items-center py-5">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Building a Culture of Mental Health, One Community at a Time!
          </h1>
          <p className="lead">
            We are a community-based non-governmental organisation which started
            off in Subang Jaya to improve mental health awareness and suicide
            prevention. We have since raised our intentions to work nationally
            in improving mental health awareness, provide knowledge and skills
            on mental health and assist in access to care. We focus our work
            amongst the young and those who are young at heart through talks,
            trainings and community outreaches.
          </p>
        </div>
        <div className="col-lg-4 pb-5">
          <StaticImage
            src="../images/logo.png"
            alt=""
            quality={95}
            formats={["AUTO", "WEBP"]}
            layout="fixed"
            width={400}
            height={400}
            className="d-block fluid rounded-circle mx-auto"
          />{" "}
        </div>
      </div>

      <div className="row d-flex align-items-center py-5">
        <div className="col-lg-5 mx-auto">
          <StaticImage
            src="../images/image_001.jpg"
            alt=""
            quality={95}
            className="d-block fluid"
          />
        </div>
        <div className="col-lg-7 py-5">
          <h2 className="featurette-heading">
            Vision<span className="text-muted"></span>
          </h2>
          <p className="lead">
            For Malaysians to have access to knowledge and skills to maintain
            good mental well-being.
          </p>
        </div>
      </div>

      <div className="row d-flex flex-column-reverse flex-lg-row align-items-center">
        <div className="col-lg-6 py-5">
          <h2 className="featurette-heading">
            Mission<span className="text-muted"></span>
          </h2>
          <ol class="lead">
            <li>
              To raise mental health awareness and reduce mental health related
              stigma.
            </li>
            <li>
              To promote resilience and suicide prevention through Gatekeeper
              training and experts’ involvement.
            </li>
            <li>Empowering youths to care for their own mental health.</li>
            <li>
              To encourage help seeking attitude and tackle mental health issues
              through an early intervention approach.
            </li>
            <li>To build a resilient community.</li>
          </ol>
        </div>
        <div className="col-lg-6">
          <StaticImage
            src="../images/image_002.jpg"
            className="d-inline-block fluid"
            alt=""
          />
        </div>
      </div>
    </div>

    <CoreValues />

    <TeamMembers />
  </Layout>
)

export default IndexPage
