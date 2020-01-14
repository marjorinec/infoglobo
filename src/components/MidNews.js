import React from 'react'
import { Row, Col } from 'react-bootstrap'

class MidNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      image: null
    }
  }

  handleImageUrl(url) {
    this.setState({ image: `./news-imgs/${this.props.newsInfo.image}` })
  }

  componentDidMount() {
    this.handleImageUrl(this.props.newsInfo.image)
  }

  render() {
    if (this.state.image === null) {
      return (<div>Carregando todo</div>)
    } else {
      return (
        <Col>
          <Row>
            <Col lg={6} md={6} className="news">
            <a href={this.props.newsInfo.url}>
              <img alt="news" className="news-img" src={this.state.image}></img>
            </a>
            </Col>
            <Col lg={6} md={6} className="news">
              <a href={this.props.newsInfo.url}>
                <div className="mid-news-category text-uppercase">
                  {this.props.newsInfo.label}
                </div>
                <h5 className="mid-news-title">
                {this.props.newsInfo.title}
                </h5>
                <div className="mid-description">
                {this.props.newsInfo.description}
                </div>
              </a>
              <a href="#">
                <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
              </a>
            </Col>
          </Row>
        </Col>
      )
    }
  }
}

export default MidNews