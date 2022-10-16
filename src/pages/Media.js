import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import MediaCard from '../components/MediaCard';
import mediacardinfo from '../components/mediacardinfo';

export default function Media() {
    return (
        <>
            <Container className="py-5">
                <Header name="Article" />

            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    {
                        mediacardinfo.map(MediaCard)
                    }
                </Row>
            </Container>
        </>
    )
}

