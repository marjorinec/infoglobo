import React from 'react'
import { Col } from 'react-bootstrap'

const BigNews = (props) => (
  <Col className="news" lg={6} md={6}>
    <a href={props.newsInfo.url}>
      <div className="news-img-overlay"></div>
      <img alt="news" className="news-img" src={`./news-imgs/${props.newsInfo.image}`} />
      <a href="#">
        <img alt="share" className="share-icon" src="./icons/share.png" />
      </a>
      <div className="news-info">
        <div className="news-category text-uppercase">
          {props.newsInfo.label}
        </div>
        <h5 className="news-title">
          {props.newsInfo.title}
        </h5>
        <div className="news-description">
          {props.newsInfo.description}
        </div>
      </div>
    </a>
  </Col>
)

export default BigNews