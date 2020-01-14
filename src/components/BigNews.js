import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './big-news.css'

class BigNews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Col className="first-news" lg={6} md={6}>
        <div className="news-img-overlay"></div>
        <img alt="news" className="news-img" src={this.props.img} />
        <img alt="share" className="share-icon" src="./icons/share.png" />
        <div className="news-info">
          <div className="news-category text-uppercase">
            {this.props.category}
          </div>
          <h5 className="news-title">
            {this.props.title}
          </h5>
          <div className="news-description">
            {this.props.description}
          </div>
        </div>
      </Col>
    )
  }
}

export default BigNews