import React from 'react'
import Header from './components/Header'
import BigNews from './components/BigNews'
import MidNews from './components/MidNews'
import SmallNews from './components/SmallNews'
import Propaganda from './components/Propaganda'
import SectionNews from './components/SectionNews'
import { Container, Row } from 'react-bootstrap'
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
    })
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
            <Row>
              <SectionNews
                newsInfo={this.state.brazilData}
              />
            </Row>
            <Row>
              <SectionNews
                newsInfo={this.state.worldData}
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
