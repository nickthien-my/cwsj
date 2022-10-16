import { Container, Row, Col } from "react-bootstrap"
import Captions from "./Captions"

export default function EventInfo(info) {

    return (
        <>

            <Container className="p-5 border-bottom">
                <Row className="d-flex flex-column-reverse flex-lg-row">
                    <Col lg={6}>
                        <h1>{info.name.toUpperCase()}</h1>
                        <h4>{info.subtitle}</h4>
                        <h4 className="text-muted">{info.datetime}</h4>
                        <h5 className="pb-3">{info.location}</h5>
                        {info.blurb.map(Captions)}
                    </Col>
                    <Col lg={6}>
                        <img
                            src={info.imgSrc}
                            alt=""
                            className="w-100 pb-3" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}