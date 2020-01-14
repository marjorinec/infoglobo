import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SmallNews from './SmallNews'

class SectionNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
			<Col>
				<Row className="news">
					<Col className="section-title text-uppercase">
						{this.props.newsInfo.name}
					</Col>
				</Row>
				<Row className="section-news">
					<SmallNews
						newsInfo={this.props.newsInfo.data[0]}
					/>
					<SmallNews
						newsInfo={this.props.newsInfo.data[1]}
					/>
					<SmallNews
						newsInfo={this.props.newsInfo.data[2]}
					/>
					<SmallNews
						newsInfo={this.props.newsInfo.data[3]}
					/>
				</Row>

				<Row className="section-divider news text-uppercase">
					<Col lg={{span: 2, offset: 10}} className="section-divider-content">
						{this.props.newsInfo.name} +
					</Col>
				</Row>
			</Col>
    )
  }
}

export default SectionNews