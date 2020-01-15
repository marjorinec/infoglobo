import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Header = () => (
  <header>
    <Row>
      <Col className="header" xs={12} md={12} lg={12}>
        <img alt="burger-menu" className="burger-button" src="./icons/burger-icon.png"/>
        <h1 id="header-title">
          <img alt="infoglobo-logo" id="header-img" src="./logos/infoglobo-logo.png"/>
        </h1>
      </Col>
    </Row>
  </header>
)

export default Header
