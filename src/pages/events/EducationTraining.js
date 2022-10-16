import { Container, Row, Col } from 'react-bootstrap'
import PhotoHeader from '../../components/PhotoHeader'
import Photo from '../../components/Photo'
import img_1_1 from "./img/events/educationtraining/20190727_001.jpg"
import img_1_2 from "./img/events/educationtraining/20190727_005.jpg"
import img_1_3 from "./img/events/educationtraining/20190727_003.jpg"
import img_1_4 from "./img/events/educationtraining/20190727_004.jpg"
import img_1_5 from "./img/events/educationtraining/20190727_002.jpg"
import img_1_6 from "./img/events/educationtraining/20190727_006.jpg"
import img_2_1 from "./img/events/educationtraining/20191012_001.jpg"
import img_2_2 from "./img/events/educationtraining/20191012_002.jpg"
import img_2_3 from "./img/events/educationtraining/20191012_003.jpg"
import img_2_4 from "./img/events/educationtraining/20191012_004.jpg"
import img_2_5 from "./img/events/educationtraining/20191012_005.jpg"
import img_2_6 from "./img/events/educationtraining/20191012_006.jpg"
import img_2_7 from "./img/events/educationtraining/20191012_007.jpg"
import img_2_8 from "./img/events/educationtraining/20191012_008.jpg"
import img_2_9 from "./img/events/educationtraining/20191012_009.jpg"
import img_3_1 from "./img/events/educationtraining/201911xx_001.jpg"
import img_3_2 from "./img/events/educationtraining/201911xx_002.jpg"
import img_3_3 from "./img/events/educationtraining/201911xx_003.jpg"
import img_3_4 from "./img/events/educationtraining/201911xx_004.jpg"
import img_3_5 from "./img/events/educationtraining/201911xx_005.jpg"
import img_3_6 from "./img/events/educationtraining/201911xx_006.jpg"
import img_3_7 from "./img/events/educationtraining/201911xx_007.jpg"
import img_4_1 from "./img/events/educationtraining/20200118_001.jpg"
import img_4_2 from "./img/events/educationtraining/20200118_002.jpg"


export default function EducationTraining() {
    return (
        <>
            <Container className="py-5">
                <PhotoHeader name="Caregiving & Self Care Workshop at Sunway University on 18th Jan 2020" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_4_1} />
                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_4_2} />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <PhotoHeader name="Building Resilience Training Program at INTI College on November 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_3_1} />
                        <Photo imgSrc={img_3_2} />
                        <Photo imgSrc={img_3_3} />

                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_3_4} />
                        <Photo imgSrc={img_3_5} />
                        <Photo imgSrc={img_3_6} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_3_7} />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <PhotoHeader name="Building Resilience Training Program at Segi College on 12th October 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_2_1} />
                        <Photo imgSrc={img_2_2} />
                        <Photo imgSrc={img_2_3} />

                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_2_4} />
                        <Photo imgSrc={img_2_5} />
                        <Photo imgSrc={img_2_6} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_2_7} />
                        <Photo imgSrc={img_2_8} />
                        <Photo imgSrc={img_2_9} />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <PhotoHeader name="Building Resilience Training Program by Dr Tan and Dr Intan at Sunway University
        College 27th July 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_1_1} />
                        <Photo imgSrc={img_1_2} />
                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_1_3} />
                        <Photo imgSrc={img_1_4} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_1_5} />
                        <Photo imgSrc={img_1_6} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
