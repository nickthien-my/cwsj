import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PhotoHeader from '../../components/PhotoHeader'
import Photo from '../../components/Photo'
import img_1_1 from './img/events/mentalhealthawarenesscampaigns/20191026_001.jpg'
import img_1_2 from './img/events/mentalhealthawarenesscampaigns/20191026_002.jpg'
import img_1_3 from './img/events/mentalhealthawarenesscampaigns/20191026_003.jpg'
import img_1_4 from './img/events/mentalhealthawarenesscampaigns/20191026_004.jpg'
import img_2_1 from './img/events/mentalhealthawarenesscampaigns/20190714_001.jpg'
import img_2_2 from './img/events/mentalhealthawarenesscampaigns/20190714_002.jpg'
import img_2_3 from './img/events/mentalhealthawarenesscampaigns/20190714_003.jpg'
import img_2_4 from './img/events/mentalhealthawarenesscampaigns/20190714_004.jpg'
import img_2_5 from './img/events/mentalhealthawarenesscampaigns/20190714_005.jpg'
import img_2_6 from './img/events/mentalhealthawarenesscampaigns/20190714_006.jpg'
import img_2_7 from './img/events/mentalhealthawarenesscampaigns/20190714_007.jpg'
import img_3_1 from './img/events/mentalhealthawarenesscampaigns/20190511_001.jpg'
import img_3_2 from './img/events/mentalhealthawarenesscampaigns/20190511_002.jpg'
import img_3_3 from './img/events/mentalhealthawarenesscampaigns/20190511_003.jpg'
import img_3_4 from './img/events/mentalhealthawarenesscampaigns/20190511_004.jpg'


export default function MentalHealthAwarenessCampaigns() {
    return (
        <>
            <Container className="py-5">
                <PhotoHeader name="Coming Out For The First Time Da Men Mall - Hari Ibu MPSJ 11 May 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_3_3} />
                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_3_2} />
                        <Photo imgSrc={img_3_4} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_3_1} />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <PhotoHeader name="Walk-a-hunt 14 July 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_2_1} />
                        <Photo imgSrc={img_2_4} />
                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_2_2} />
                        <Photo imgSrc={img_2_5} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_2_3} />
                        <Photo imgSrc={img_2_6} />
                        <Photo imgSrc={img_2_7} />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <PhotoHeader name="Mental Health Day Hunt 26 Oct 2019" />
                <Row>
                    <Col lg={4}>
                        <Photo imgSrc={img_1_1} />
                        <Photo imgSrc={img_1_4} />
                    </Col>
                    <Col lg={4}>
                        <Photo imgSrc={img_1_2} />
                    </Col>
                    <Col>
                        <Photo imgSrc={img_1_3} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
