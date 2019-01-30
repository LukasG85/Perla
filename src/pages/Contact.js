import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layaut from '../components/layout'
import ContactInfo from '../components/contact/ContactInfo'
import styled from 'styled-components'
import ContactBcg from './contactBcg.jpeg'

export default class Contact extends Component {
  render() {
    return (
      <Layaut>
        <ContactWrapper>
          <ContactInfo />
        </ContactWrapper>
      </Layaut>
    )
  }
}

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 97vh;
  padding-top: 70px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${ContactBcg}) no-repeat center top;
  background-size: cover;
`
