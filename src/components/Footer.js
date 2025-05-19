import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/Cute Avatar.png";
import navIcon1 from '../assets/linkedin.png';
import navIcon2 from '../assets/upwork.png';
import navIcon3 from '../assets/github-mark-white.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aaron-tran-2a3ab01a3/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.upwork.com/freelancers/~011862acb2c18045eb"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/aaron-transformation"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}