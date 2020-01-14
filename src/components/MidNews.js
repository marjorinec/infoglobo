import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MidNews = () => (
  <Col>
    <Row>
      <Col className="news">
        <img alt="news" className="news-img" src="./news-imgs/216x216-1.jpeg"></img>
      </Col>
      <Col className="news">
        <div className="mid-news-category text-uppercase">
          Comportamento
        </div>
        <h5 className="mid-news-title">
          Suspendisse dapibus turpis enim, ac commodo odio porta at
        </h5>
        <div className=" mid-description">
          Nullam ac turpis tellus. Morbi tincidunt nulla in massa condime dçskh kdç hfkçjdk jhhj ss sghshg dghhd sgsgs
        </div>
        <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
      </Col>
    </Row>
  </Col>
)

export default MidNews