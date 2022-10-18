import { Container, Row, Col } from "react-bootstrap"

export default function EventInfo(info) {

    return (
        <>

            <Container className="py-5 px-2 border-bottom">
                <Row className="d-flex flex-column-reverse flex-lg-row">
                    <Col lg={6}>
                        <h1>{info.name.toUpperCase()}</h1>
                        <h4>{info.subtitle}</h4>
                        <h4 className="text-muted">{info.datetime}</h4>
                        <h5 className="pb-3">{info.location}</h5>
                        <div>{info.body}</div>
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