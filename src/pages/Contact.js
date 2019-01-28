import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layaut from '../components/layout'

export default class Contact extends Component {
  render() {
    return (
      <Layaut>
        Contact
        <Link to="/">Go to Home</Link>
      </Layaut>
    )
  }
}
