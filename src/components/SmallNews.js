import React from 'react'
import { Col } from 'react-bootstrap'

const SmallNews = (props) => (
  <Col className="news small-news-row" lg={3} md={3}>
    <a href={props.newsInfo.url}>
      <img alt="news" className="news-img" src={`./news-imgs/${props.newsInfo.image}`} />
      <div className="mid-news-category small-news-label text-uppercase">
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
      <img alt="share" className="sm-black-share-icon" src="./icons/black-share.png"></img>
    </a>
  </Col>
)

export default SmallNews