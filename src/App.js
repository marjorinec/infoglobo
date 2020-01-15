import React from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import Header from './components/Header'
import BigNews from './components/BigNews'
import MidNews from './components/MidNews'
import SmallNews from './components/SmallNews'
import Propaganda from './components/Propaganda'
import SectionNews from './components/SectionNews'
import Footer from './components/Footer'
import Loader from './components/Loader'

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
    })
  }

  componentDidMount() {
    this.getInfogloboData()
  }

  render() {
    if (this.state.mainData === null) {
      return <Spinner animation="border" />
    } else {
      return (
        <section className="App">
        <Header />
        <article>
          <Container>
            <Row>
              <Loader ready={this.state.mainData}>
                <BigNews
                  newsInfo={this.state.mainData.data[0]}
                />
              </Loader>
              
              <Loader ready={this.state.mainData}>
                <BigNews
                  newsInfo={this.state.mainData.data[1]}
                />
              </Loader>

              <Loader ready={this.state.mainData}>
                <MidNews
                  newsInfo={this.state.mainData.data[2]}
                />
              </Loader>
              <Loader ready={this.state.mainData}>
                <MidNews
                  newsInfo={this.state.mainData.data[3]}
                />
              </Loader>
            </Row>

            <Row>
              <Loader ready={this.state.mainData}>
                <SmallNews
                  newsInfo={this.state.mainData.data[4]}
                />
              </Loader>

              <Loader ready={this.state.mainData}>
                <SmallNews
                  newsInfo={this.state.mainData.data[5]}
                />
              </Loader>
              
              <Loader ready={this.state.mainData}>
                <SmallNews
                  newsInfo={this.state.mainData.data[6]}
                />
              </Loader>

              <Loader ready={this.state.mainData}>
                <SmallNews
                  newsInfo={this.state.mainData.data[7]}
                />
              </Loader>
            </Row>
          </Container>

          <Propaganda/>

          <Container>
            <Row>
              <Loader ready={this.state.brazilData}>
                <SectionNews
                  newsInfo={this.state.brazilData}
                />
              </Loader>
            </Row>
            <Row>
              <Loader ready={this.state.worldData}>
                <SectionNews
                  newsInfo={this.state.worldData}
                />
              </Loader>
            </Row>
          </Container>

          <Footer />

        </article>
      </section>
      )
    }
  }
}

export default App
