import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/euphy2.png';
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{paddingTop:"20px"}}>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/euphemia-agwa-b4357979/"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
