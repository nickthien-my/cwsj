import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import compassionicon from "./compassion.svg";
import understandingicon from "./understanding.svg";
import resilienceicon from "./resilience.svg";

export default function CoreValues() {
    return (
        <>
            <Container className="px-2 mb-5">
                <h1 className="border-bottom pb-2 fw-bold">Core Values</h1>
                <Row className="align-items-center justify-content-evenly">
                    <Col lg={4} className="py-3">
                        <img
                            src={compassionicon}
                            alt="Compassion"
                            className="d-block mx-auto w-50 p-3"
                        />
                        <h2 className="text-center">Compassion</h2>
                    </Col>
                    <Col lg={4} className="py-3">
                        <img
                            src={understandingicon}
                            alt="Understanding"
                            className="d-block mx-auto w-50 p-3"
                        />
                        <h2 className="text-center">Understanding</h2>
                    </Col>
                    <Col lg={4} className="py-3">
                        <img
                            src={resilienceicon}
                            alt="Resilience"
                            className="d-block mx-auto w-50 p-3"
                        />
                        <h2 className="text-center">Resilience</h2>
                    </Col>
                </Row>
            </Container>
        </>

    )
}
