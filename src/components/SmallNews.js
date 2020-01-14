import React from 'react'
import { Col } from 'react-bootstrap'

class SmallNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Col className="news small-news-row" lg={3} md={3}>
        <img className="news-img" src={`./news-imgs/${this.props.newsInfo.image}`}></img>
        <div className="mid-news-category small-news-label text-uppercase">
          {this.props.newsInfo.label}
        </div>
        <h5 className="mid-news-title">
          {this.props.newsInfo.title}
        </h5>
        <div className="mid-description">
          {this.props.newsInfo.description}
        </div>
        <img alt="share" className="sm-black-share-icon" src="./icons/black-share.png"></img>
      </Col>
    )
  }
}

export default SmallNews