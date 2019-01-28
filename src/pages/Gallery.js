import React, { Component } from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

// import img from '../images/offer/Man.jpeg'

export default class Gallery extends Component {
  render() {
    return (
      <Layout>
        <GalleryWrapper className="row">
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
          <div className="item col-sm-12 col-md-6 col-lg-2 loc-xl-2" />
        </GalleryWrapper>
      </Layout>
    )
  }
}

const GalleryWrapper = styled.div`
  margin: 50px auto;
  .item {
    height: 300px;
    width: 250px;
    margin: 20px;
    background-color: green;
  }
`
