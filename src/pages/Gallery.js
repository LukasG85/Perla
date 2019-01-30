import React, { Component } from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
// import React from 'react'
import Helmet from 'react-helmet'
// import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/gallery/Lightbox'

let Images = []

const contentful = require('contentful')

const client = contentful.createClient({
  space: '01flzezsn2j7',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.ACCESS_TOKEN,
})

client
  .getEntries()
  .then(response => response.items[8].fields.images)
  .then(data => {
    data.map(image => {
      return Images.push(image.fields.file)
    })
  })
  .catch(console.error)

class HomeIndex extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <GalleryWrapper>
          <Gallery
            images={Images.map(
              ({ id, url, src = url, caption, description }) => ({
                url,
                src,
                caption,
                description,
              })
            )}
          />
        </GalleryWrapper>
      </Layout>
    )
  }
}

export default HomeIndex

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 97vh;
  padding-top: 70px;
  padding-left: 5vw;
  padding-right: 5vw;
  background-color: #000000;
  .image {
    height: 150px;
    width: 200px;
    margin: 20px;
  }
`
