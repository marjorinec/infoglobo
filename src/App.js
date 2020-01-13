import React from 'react'
import Header from './components/header'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <section className="App">
      <Header />
      <article>
        <Container>
            <section>
              <Row>
                <Col className="first-news" lg={6} md={6}>
                  <img src="./news-imgs/464x261-1.jpeg" />
                  <div className="news-info">
                    <div className="news-category">
                      BRASIL
                    </div>
                    <h5 className="news-title">
                      Nullam arcu lacus, tincidunt vel efficitur
                    </h5>
                    <div className="news-description">
                      Vivamus vitae mauris eget enim gravida eleifend. Nunc et diam ddfsfsd sfdf sdfsdf sdfsdfsd sdfsdfsd fsdfsdfd fdfdsf fdf dfd
                    </div>
                  </div>
                </Col>
                <Col className="first-news" lg={6} md={6}>
                  <img src="./news-imgs/464x261-2.jpeg" />
                </Col>
              </Row>
            </section>
        </Container>
      </article>
    </section>
  ); 
}

export default App
