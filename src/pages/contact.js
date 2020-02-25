import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactInfo from '../components/contact/ContactInfo'
import styled from 'styled-components'
import ContactBcg from '../images/contact.jpeg'
import ContactMobile from '../images/contactPhone.jpeg'

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Perła - Kontakt"
          keywords={[
            `salon fryzjerski jodłowa`,
            `salon perła`,
            `zakład fryzjerski jodłowa`,
            `fryzjer`,
            `jodłowa fryzjer`,
            `perła salon fryzjerski`,
            `perła`,
          ]}
        />
        <ContactWrapper>
          <ContactInfo />
        </ContactWrapper>
      </Layout>
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
    url(${ContactMobile}) no-repeat center top;
  background-size: cover;

  @media (min-width: 992px) {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${ContactBcg}) no-repeat center top;
    background-size: cover;
  }
`
