import React from 'react'
import Header from './components/header'
import BigNews from './components/BigNews'
import { Container, Row, Col } from 'react-bootstrap'
// import './App.css'

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
          </Row>
        </Container>
      </article>
    </section>
  ); 
}

export default App
