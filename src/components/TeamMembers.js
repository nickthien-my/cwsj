import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Team(team) {
    return (
        <>
            <h4 className="text-center">{team.name}</h4>
            <p className="text-center text-muted">{team.role}</p>
        </>
    );
}

export default function TeamMembers() {
    return (
        <div className="container pb-5">

            <h1 className="pb-5 fw-bold">TEAM MEMBERS</h1>
            <div className="row align-items-top justify-content-center">
                <div className="col-lg-4 pb-3">
                    <div className="row pb-3">
                        <StaticImage
                            className="img-fluid rounded-circle mx-auto"
                            quality={95}
                            formats={["AUTO", "WEBP"]}
                            layout="fixed"
                            width={200}
                            height={200}
                            src="../images/profile/profile_michelleng.jpg" alt="Y.B. Puan Michelle Ng Mei Sze" />
                    </div>
                    <Team
                        name="Y.B. Puan Michelle Ng Mei Sze"
                        role="Honorary Adviser"
                    />
                </div>
            </div>


            <div className="px-2">
                <h2 className="pb-5">Council Members</h2>

                <div className="row align-items-top justify-content-evenly">
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_dramersiddiq.jpg" alt="Prof. Madya Dr. Amer Siddiq Amer Mordin" />
                        </div>
                        <Team name="Prof. Madya Dr. Amer Siddiq Amer Mordin" role="Chairman & Consultant Psychiatrist" />
                    </div>
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_pohkhuen.jpg" alt="Dr. Lim Poh Khuen" />
                        </div>
                        <Team name="Dr. Lim Poh Khuen" role="Vice President" />
                    </div>
                </div>

                <div className="row align-items-top justify-content-evenly">
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_priscaleong.jpg" alt="Ms. Prisca Leong Mae Jern" />
                        </div>
                        <Team name="Ms. Prisca Leong Mae Jern" role="Secretary" />
                    </div>
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_yingeong.jpg" alt="Mr. Har Yin Geong" />
                        </div>
                        <Team name="Mr. Har Yin Geong" role="Treasurer" />
                    </div>
                </div>

                <div className="row align-items-top justify-content-evenly">
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_izahrajajaafar.jpg" alt="YM Raja Nor Izah Raja Jaafar" />
                        </div>
                        <Team name="YM Raja Nor Izah Raja Jaafar" role="Council Member" />
                    </div>
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_christinagoh.jpg" alt="Ms. Christina Goh Chin Cheng" />
                        </div>
                        <Team name="Ms. Christina Goh Chin Cheng" role="Council Member" />
                    </div>
                    <div className="col-lg-4 pb-3">
                        <div className="row pb-3">
                            <StaticImage
                                className="img-fluid rounded-circle mx-auto"
                                quality={95}
                                formats={["AUTO", "WEBP"]}
                                layout="fixed"
                                width={200}
                                height={200}
                                src="../images/profile/profile_phehkaishuen.jpg" alt="Mr. Pheh Kai Shuen" />
                        </div>
                        <Team name="Mr. Pheh Kai Shuen" role="Council Member" />
                    </div>
                </div>
            </div>
        </div>
    )
}
