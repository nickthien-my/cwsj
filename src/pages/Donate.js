import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'

export default function donate() {
    return (
        <Layout>
            <Seo title="Donate" />

            <div className="container">
                <div className="row">
                    <StaticImage
                        src="../images/general/jumbo.jpg"
                        quality={95}
                        formats={["AUTO", "WEBP"]}
                        alt="Donate Header"
                        className="img-fluid" />
                </div>
                <div className="pt-3 pb-5">
                    <div>
                        <h1>DONATE</h1>
                        <hr />
                        <p className="fs-4 pb-3">Help us to do more for the community. Consider donating to our cause!</p>

                        <h3>Persatuan Wira Kasih</h3>
                        <p>562302625709 (Maybank)</p>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
