import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import headerImg from '../assets/Cute Avatar.png'

export const Banner = () => {
    const [num, setNum] = useState(0);
    const [del, setDelete] = useState(false);
    const toRotate = [ "Frontend", "Backend", "Full-Stack", "Web Developer"];
    const [text, setText ] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, delta)

        return () => { clearInterval(timer)};
    }, [text])

    const time = () => {
        let i = num % toRotate.length;
        let allText = toRotate[i];
        let newText = del ? allText.substring(0, text.length - 1) : allText.substring(0, text.length + 1);

        setText(newText);

        if (del) {
            setDelta(oldDelta => oldDelta / 2)
        }
        if (!del && newText === allText) {
            setDelete(true);
            setDelta(period)
        }
        else if (del && newText === '') {
            setDelete(false);
            setNum(num + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Aaron, a `}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Hello there! I'm Aaron Tran, a highly motivated and creative Web Developer on a 
                            mission to turn imaginative ideas into seamless, user-centric digital 
                            experiences. With a passion for coding and a knack for problem-solving, 
                            I bring a blend of technical expertise and a keen eye for design to the 
                            ever-evolving landscape of web development.</p>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Avatar" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;