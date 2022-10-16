import { Card } from 'react-bootstrap'
import Col from "react-bootstrap/Col";

export default function MediaCard(info) {
    return (
        <>
            <Col lg={4} className="pb-5">
                <Card>
                    <img src={info.imgsrc} className="card-img-top" alt={info.name} />
                    <div className="card-body">
                        <h5 className="card-title">{info.name}</h5>
                        <p className="card-text">{info.summary}</p>
                        <a href={info.link} class="btn btn-primary">Read More</a>
                    </div>
                </Card>
            </Col>
        </>

    )
}

