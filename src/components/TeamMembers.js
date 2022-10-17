import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from './Header';
import profileybmichelleng from "./img/profile/profile_ybmichelleng.jpg";
import profiledramersiddiq from "./img/profile/profile_dramersiddiq.jpg";
import profiledrlimpohkhuen from "./img/profile/profile_drlimpohkhuen.jpg";
import profilepriscaleong from "./img/profile/profile_priscaleong.jpg";
import profileyingeong from "./img/profile/profile_yingeong.jpg";
import profileizahrajajaafar from "./img/profile/profile_izahrajajaafar.jpg";
import profilechristinagoh from "./img/profile/profile_christinagoh.jpg";
import profilephehkaishuen from "./img/profile/profile_phehkaishuen.jpg";


function Team(team) {
    return (
        <div className="pb-5">
            <img className="d-block rounded-circle mx-auto mb-3" width="140" height="140" src={team.imgLocation} alt={team.name} />
            <h4 className="text-center">{team.name}</h4>
            <p className="text-center text-muted">{team.role}</p>
        </div>
    );
}

export default function TeamMembers() {
    return (
        <>
            <Container className="pt-5 px-2">
                <Header name="Team Members" />
                <Row className="pt-5 align-items-top justify-content-evenly">
                    <Col>
                        <Team name="Y.B. Puan Michelle Ng Mei Sze" imgLocation={profileybmichelleng} role="Honorary Adviser" />
                    </Col>
                </Row>
            </Container>

            <Container className="px-2">
                <h2 className="pb-5">Council Members</h2>

                <Row className="align-items-top justify-content-evenly">
                    <Col lg={4}>
                        <Team name="Prof. Madya Dr. Amer Siddiq Amer Mordin" imgLocation={profiledramersiddiq} role="Chairman & Consultant Psychiatrist" />
                    </Col>
                    <Col lg={4}>
                        <Team name="Dr. Lim Poh Khuen" imgLocation={profiledrlimpohkhuen} role="Vice President" />
                    </Col>
                </Row>

                <Row className="align-items-top justify-content-evenly">
                    <Col lg={4}>
                        <Team name="Ms. Prisca Leong Mae Jern" imgLocation={profilepriscaleong} role="Secretary" />
                    </Col>
                    <Col lg={4}>
                        <Team name="Mr. Har Yin Geong" imgLocation={profileyingeong} role="Treasurer" />
                    </Col>
                </Row>

                <Row className="align-items-top justify-content-evenly">
                    <Col lg={4}>
                        <Team name="YM Raja Nor Izah Raja Jaafar" imgLocation={profileizahrajajaafar} role="Council Member" />

                    </Col>
                    <Col lg={4}>
                        <Team name="Ms. Christina Goh Chin Cheng" imgLocation={profilechristinagoh} role="Council Member" />
                    </Col>
                    <Col lg={4}>
                        <Team name="Mr. Pheh Kai Shuen" imgLocation={profilephehkaishuen} role="Council Member" />
                    </Col>
                </Row>

            </Container>

        </>

    )
}
