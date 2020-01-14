import React from 'react'
import Header from './components/Header'
import BigNews from './components/BigNews'
import MidNews from './components/MidNews'
import { Container, Row } from 'react-bootstrap'

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

  const newsThree = {
    category: "Comportamento",
    title: "Suspendisse dapibus turpis enim, ac commodo odio porta at",
    description: "Nullam ac turpis tellus. Morbi tincidunt nulla in massa condime dçskh kdç hfkçjdk jhhj ss sghshg dghhd sgsgs",
    img: "./news-imgs/216x216-1.jpeg"
  }

  const newsFour = {
    category: "Estilo",
    title: "Ut eleifend bibendum eros vitae volutpat odio porta",
    description: "Integer suscipit tellus ut elit mollis vehicula. Nullam arcu la dçskh kdç hfkçjdk jhhj ss sghshg dghhd sgsgs",
    img: "./news-imgs/216x216-2.jpeg"
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

            <MidNews
              newsInfo={newsThree}
            />
            <MidNews
              newsInfo={newsFour}
            />

        </Row>

        </Container>
      </article>
    </section>
  ); 
}

export default App
