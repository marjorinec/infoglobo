import React from 'react'
import { Row, Col } from 'react-bootstrap'

class Propaganda extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {}
  }

  render() {
    return (
      <Row className="propaganda-slot">
        <Col className="propaganda-placeholder">
          <span className="propaganda-pattern text-uppercase">Advertising 728x90</span>
        </Col>
      </Row>
    )
  }
}

export default Propaganda