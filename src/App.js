import React from 'react'
import Header from './components/Header'
import BigNews from './components/BigNews'
import MidNews from './components/MidNews'
import SmallNews from './components/SmallNews'
import Propaganda from './components/Propaganda'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      mainData: null
    }
  }

  async getInfogloboData() {
    const infogloboData = await axios.get('/data.json')

    this.setState({
      mainData: infogloboData.data.section[0],
      brazilData: infogloboData.data.section[1],
      worldData: infogloboData.data.section[2]
    }, () => console.log(this.state.brazilData))
  }

  componentDidMount() {
    this.getInfogloboData()
  }

  render() {
    if (this.state.mainData === null) {
      return (<div>Carregando todo</div>)
    } else {
      return (
        <section className="App">
        <Header />
        <article>
          <Container>
            <Row>
              <BigNews
                newsInfo={this.state.mainData.data[0]}
              />
              <BigNews
                newsInfo={this.state.mainData.data[1]}
              />

              <MidNews
                newsInfo={this.state.mainData.data[2]}
              />
              <MidNews
                newsInfo={this.state.mainData.data[3]}
              />
            </Row>

            <Row>
              <SmallNews
                newsInfo={this.state.mainData.data[4]}
              />
              <SmallNews
                newsInfo={this.state.mainData.data[5]}
              />
              <SmallNews
                newsInfo={this.state.mainData.data[6]}
              />
              <SmallNews
                newsInfo={this.state.mainData.data[7]}
              />
            </Row>
          </Container>

          <Propaganda/>

          <Container>
            <Row className="news">
              <Col className="section-title text-uppercase">
                {this.state.brazilData.name}
              </Col>
            </Row>
            <Row className="section-news">
              <SmallNews
                newsInfo={this.state.brazilData.data[0]}
              />
              <SmallNews
                newsInfo={this.state.brazilData.data[1]}
              />
              <SmallNews
                newsInfo={this.state.brazilData.data[2]}
              />
              <SmallNews
                newsInfo={this.state.brazilData.data[3]}
              />
            </Row>

            <Row className="news">
              <Col className="section-title text-uppercase">
                {this.state.worldData.name}
              </Col>
            </Row>
            <Row className="section-news">
              <SmallNews
                newsInfo={this.state.worldData.data[0]}
              />
              <SmallNews
                newsInfo={this.state.worldData.data[1]}
              />
              <SmallNews
                newsInfo={this.state.worldData.data[2]}
              />
              <SmallNews
                newsInfo={this.state.worldData.data[3]}
              />
            </Row>
          </Container>

        </article>
      </section>
      )
    }
  }
}

export default App
