import React from 'react'
import { Col } from 'react-bootstrap'

class BigNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Col className="news" lg={6} md={6}>
        <a href={this.props.newsInfo.url}>
          <div className="news-img-overlay"></div>
          <img alt="news" className="news-img" src={`./news-imgs/${this.props.newsInfo.image}`} />
          <a href="#">
            <img alt="share" className="share-icon" src="./icons/share.png" />
          </a>
          <div className="news-info">
            <div className="news-category text-uppercase">
              {this.props.newsInfo.label}
            </div>
            <h5 className="news-title">
              {this.props.newsInfo.title}
            </h5>
            <div className="news-description">
              {this.props.newsInfo.description}
            </div>
          </div>
        </a>
      </Col>
    )
  }
}

export default BigNews