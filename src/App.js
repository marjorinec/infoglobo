import React from 'react'
import Header from './components/header'
import BigNews from './components/BigNews'
import { Container, Row, Col } from 'react-bootstrap'
// import './App.css'

function App() {
  return (
    <section className="App">
      <Header />
      <article>
        <Container>
          <BigNews/>
        </Container>
      </article>
    </section>
  ); 
}

export default App
