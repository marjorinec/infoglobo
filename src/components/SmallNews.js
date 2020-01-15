import React from "react";
import { Col, Row } from "react-bootstrap";

const SmallNews = props => (
  <Col className="news small-news-row" xs={12} md={3}>
    <a className="row" href={props.newsInfo.url}>
      <Col sm={12}>
        <img
          alt="news"
          className="news-img"
          src={`./news-imgs/${props.newsInfo.image}`}
        />
      </Col>
      <Col sm={12}>
        <div className="mid-news-category small-news-label text-uppercase">
          {props.newsInfo.label}
        </div>
      </Col>
      <Col sm={12}>
        <h5 className="mid-news-title">{props.newsInfo.title}</h5>
      </Col>
      <Col sm={12}>
        <div className="mid-description">{props.newsInfo.description}</div>
      </Col>
    </a>
    <a href="#">
      <img
        alt="share"
        className="sm-black-share-icon"
        src="./icons/black-share.png"
      ></img>
    </a>
  </Col>
);

export default SmallNews;
