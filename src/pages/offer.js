import React, { Component } from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import OfferComp from '../components/global/offer/Offer'

export default class Offer extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Perła - Oferta"
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
        <OfferWrapper>
          <OfferComp />
        </OfferWrapper>
      </Layout>
    )
  }
}

const OfferWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 97vh;
  padding-top: 70px;
  background-color: #000;
`
