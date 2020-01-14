import React from 'react'
import Header from './components/Header'
import BigNews from './components/BigNews'
import MidNews from './components/MidNews'
import SmallNews from './components/SmallNews'
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
      mainData: infogloboData.data.section[0].data,
      brazilData: infogloboData.data.section[1].data,
      worldData: infogloboData.data.section[2].data
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
                newsInfo={this.state.mainData[0]}
              />
              <BigNews
                newsInfo={this.state.mainData[1]}
              />

              <MidNews
                newsInfo={this.state.mainData[2]}
              />
              <MidNews
                newsInfo={this.state.mainData[3]}
              />
            </Row>

            <Row>
              <SmallNews
                newsInfo={this.state.mainData[4]}
              />
              <SmallNews
                newsInfo={this.state.mainData[5]}
              />
              <SmallNews
                newsInfo={this.state.mainData[6]}
              />
              <SmallNews
                newsInfo={this.state.mainData[7]}
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
