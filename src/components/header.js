import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './header.css'

const Header = () => (
  <header>
    <Row>
      <Col className="header" xs={12} md={12} lg={12}>
        <h1 className="text-uppercase" id="header-title">Infoglobo</h1>
      </Col>
    </Row>
  </header>    

)

export default Header