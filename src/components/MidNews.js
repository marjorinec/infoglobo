import React from 'react'
import { Row, Col } from 'react-bootstrap'

class MidNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Col>
        <Row>
          <Col lg={6} md={6} className="news">
            <img alt="news" className="news-img" src={this.props.newsInfo.img}></img>
          </Col>
          <Col lg={6} md={6} className="news">
            <div className="mid-news-category text-uppercase">
              {this.props.newsInfo.category}
            </div>
            <h5 className="mid-news-title">
            {this.props.newsInfo.title}
            </h5>
            <div className=" mid-description">
            {this.props.newsInfo.description}
            </div>
            <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default MidNews