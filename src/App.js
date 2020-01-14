import React from 'react'
import Header from './components/Header'
import BigNews from './components/BigNews'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  const newsOne = {
    category: "Brasil",
    title: "Nullam arcu lacus, tincidunt vel efficitur",
    description: "Vivamus vitae mauris eget enim gravida eleifend. Nunc et diam ddfsfsd sfdf sdfsdf sdfsdfsd sdfsdfsd fsdfsdfd fdfdsf fdf dfd",
    img: "./news-imgs/464x261-1.jpeg"
  }

  const newsTwo = {
    category: "Moda",
    title: "Aenean quis risus vel nulla maximus",
    description: "Quisque aliquet euismod justo, sit amet sodales eros sagittis u ddfsfsd sfddsdf sdfsdf sdfsdfsd sdfsdfsd fsdfsdfd fdfdsf fdf dfd",
    img: "./news-imgs/464x261-2.jpeg"
  }

  return (
    <section className="App">
      <Header />
      <article>
        <Container>
          <Row>
            <BigNews
              newsInfo={newsOne}
            />
            <BigNews
              newsInfo={newsTwo}
            />

          <Col>
            <Row>
              <Col className="news">
                <img alt="news" className="news-img" src="./news-imgs/216x216-1.jpeg"></img>
              </Col>
              <Col className="news">
                <div className="mid-news-category text-uppercase">
                  Comportamento
                </div>
                <h5 className="mid-news-title">
                  Suspendisse dapibus turpis enim, ac commodo odio porta at
                </h5>
                <div className=" mid-description">
                  Nullam ac turpis tellus. Morbi tincidunt nulla in massa condime dçskh kdç hfkçjdk jhhj ss sghshg dghhd sgsgs
                </div>
                <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="news">
                <img alt="news" className="news-img" src="./news-imgs/216x216-2.jpeg"></img>
              </Col>
              <Col className="news">
                <div className="mid-news-category text-uppercase">
                  Estilo
                </div>
                <h5 className="mid-news-title">
                  Ut eleifend bibendum eros vitae volutpat odio porta
                </h5>
                <div className="mid-description">
                  Integer suscipit tellus ut elit mollis vehicula. Nullam arcu la dçskh kdç hfkçjdk jhhj ss sghshg dghhd sgsgs
                </div>
                <img alt="share" className="black-share-icon" src="./icons/black-share.png"></img>
              </Col>
            </Row>
          </Col>
        </Row>

        </Container>
      </article>
    </section>
  ); 
}

export default App
