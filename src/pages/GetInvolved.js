import { Container } from "react-bootstrap";
import Header from "../components/Header";
import background from "./img/general/jumbo.jpg";


export default function GetInvolved() {
    return (
        <>
            <Container>
                <img
                    src={background}
                    alt=""
                    className="w-100 fluid"
                />
            </Container>
            <Container className="px-2 py-5">
                <div>
                    <Header name="Get Involved" />
                    <p className="col-md-8 fs-4 pb-5">Interested in getting involved in the community? Join us as a volunteer.</p>
                    <a href="mailto:persatuanwirakasih@gmail.com"><button className="btn btn-primary btn-lg" type="button">Join Us!</button></a>
                </div>
            </Container >
        </>
    )
}
