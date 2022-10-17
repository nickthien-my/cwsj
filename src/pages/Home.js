import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.png";
import image1 from "./image_001.jpg";
import image2 from "./image_002.jpg";
import CoreValues from "../components/CoreValues";
import TeamMembers from "../components/TeamMembers";


const Home = () => {
    return (
        <>
            <Container className="d-flex px-2 pb-5">
                <Row className="d-flex flex-column-reverse flex-lg-row align-items-center">
                    <Col lg={6}>
                        <h1 class="display-5 fw-bold lh-1 mb-3">Building a Culture of Mental Health, One Community at a Time!</h1>
                        <p class="lead">We are a community-based non-governmental organisation which started off in Subang Jaya to
                            improve mental health awareness and suicide prevention. We have since raised our intentions to work nationally
                            in improving mental health awareness, provide knowledge and skills on mental health and assist in access to
                            care. We focus our work amongst the young and those who are young at heart through talks, trainings and
                            community outreaches.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img
                            alt=""
                            src={logo}
                            className="w-100 d-inline-block fluid p-5 rounded-circle"
                        />{' '}
                    </Col>
                </Row>

            </Container>


            <Container className="d-flex px-2 pb-5">

                <Row className="d-flex flex-lg-row align-items-center">
                    <Col lg={5}>
                        <img
                            src={image1}
                            class="w-100 d-inline-block fluid"
                            alt=""
                        />
                    </Col>
                    <Col lg={7} className="py-5">
                        <h2 className="featurette-heading">Vision<span className="text-muted"></span></h2>
                        <p className="lead">For Malaysians to have access to knowledge and skills to maintain good mental well-being.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="d-flex px-2 pb-5">

                <Row className="d-flex flex-column-reverse flex-lg-row align-items-center">
                    <Col lg={7} className="py-5">
                        <h2 className="featurette-heading">Mission<span className="text-muted"></span></h2>
                        <ol class="lead">
                            <li>To raise mental health awareness and reduce mental health related stigma.</li>
                            <li>To promote resilience and suicide prevention through Gatekeeper training and experts’ involvement.</li>
                            <li>Empowering youths to care for their own mental health.</li>
                            <li>To encourage help seeking attitude and tackle mental health issues through an early intervention approach.
                            </li>
                            <li>To build a resilient community.</li>
                        </ol>
                    </Col>
                    <Col lg={5}>
                        <img
                            src={image2}
                            class="w-100 d-inline-block fluid"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>

            <CoreValues />

            <TeamMembers />




        </>

    );

};

export default Home;