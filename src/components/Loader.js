import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader(props) {
  if (!props.ready) {
    return <Spinner animation="border" />
  } else {
    return props.children
  }  
}

export default Loader

