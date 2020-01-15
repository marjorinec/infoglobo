import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SmallNews from './SmallNews'

const SectionNews = (props) => (
	<Col>
		<Row className="news">
			<Col className="section-title text-uppercase">
				{props.newsInfo.name}
			</Col>
		</Row>
		<Row className="section-news">
			<SmallNews
				newsInfo={props.newsInfo.data[0]}
			/>
			<SmallNews
				newsInfo={props.newsInfo.data[1]}
			/>
			<SmallNews
				newsInfo={props.newsInfo.data[2]}
			/>
			<SmallNews
				newsInfo={props.newsInfo.data[3]}
			/>
		</Row>

		<Row className="section-divider news text-uppercase">
			<Col lg={{span: 2, offset: 10}} className="section-divider-content">
				{props.newsInfo.name} +
			</Col>
		</Row>
	</Col>
)

export default SectionNews