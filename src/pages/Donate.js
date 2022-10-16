import { Container } from "react-bootstrap";
import Header from "../components/Header";
import background from "./img/general/jumbo.jpg";


export default function Donate() {
    return (
        <>
            <Container>
                <img
                    src={background}
                    alt=""
                    className="w-100 fluid"
                />
            </Container>
            <Container className="p-5">
                <div>
                    <Header name="Donate" />
                    <p className="fs-4">Help us to do more for the community. Consider donating to our cause!</p>

                </div>
                <div className="py-4">
                    <h4>Persatuan Wira Kasih</h4>
                    <p>562302625709 (Maybank)</p>
                </div>

            </Container>



        </>
    )
}
