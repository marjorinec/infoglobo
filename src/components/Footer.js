import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col xs={12} sm={6} id="footer-title">
          <h1>
            <img
              alt="infoglobo-logo"
              id="footer-img"
              src="./logos/footer-logo.png"
            />
          </h1>
        </Col>

        <Col xs={12} sm={6} id="copyright-content">
          <div>COPYRIGHT © 2017</div>
          <div>TODOS OS DIREITOS RESERVADOS</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
