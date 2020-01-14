import React from 'react'
import { Col } from 'react-bootstrap'

class BigNews extends React.Component {
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
        <Col className="news" lg={6} md={6}>
          <div className="news-img-overlay"></div>
          <img alt="news" className="news-img" src={this.state.image} />
          <img alt="share" className="share-icon" src="./icons/share.png" />
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
        </Col>
      )
    }
  }
}

export default BigNews