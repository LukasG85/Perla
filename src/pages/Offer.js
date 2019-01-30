import React, { Component } from 'react'
// import { Link } from 'gatsby'
import Layaut from '../components/layout'
import styled from 'styled-components'
import OfferComp from '../components/global/offer/Offer'

export default class Offer extends Component {
  render() {
    return (
      <Layaut>
        <OfferWrapper>
          <OfferComp />
        </OfferWrapper>
      </Layaut>
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
