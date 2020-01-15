import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MidNews = (props) => (
  <Col>
    <Row>
      <Col lg={6} md={6} className="news">
      <a href={props.newsInfo.url}>
        <img alt="news" className="news-img" src={`./news-imgs/${props.newsInfo.image}`} />
      </a>
      </Col>
      <Col lg={6} md={6} className="news">
        <a href={props.newsInfo.url}>
          <div className="mid-news-category text-uppercase">
            {props.newsInfo.label}
          </div>
          <h5 className="mid-news-title">
          {props.newsInfo.title}
          </h5>
          <div className="mid-description">
          {props.newsInfo.description}
          </div>
        </a>
        <a href="#">
          <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
        </a>
      </Col>
    </Row>
  </Col>
)

export default MidNews