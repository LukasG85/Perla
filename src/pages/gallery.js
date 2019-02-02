import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Gallery from '../components/gallery/Lightbox'
const spaceId = process.env.SPACE_ID
const accessTok = process.env.ACCESS_TOKEN

class HomeIndex extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      images: [],
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  componentDidMount() {
    // date from contentful
    const contentful = require('contentful')

    const client = contentful.createClient({
      space: `${spaceId}`,
      environment: 'master', // defaults to 'master' if not set
      accessToken: `${accessTok}`,
    })

    client
      .getEntries()
      .then(response => response.items[8].fields.images)
      .then(data => {
        let images = data.map(image => {
          return image.fields.file
        })
        this.setState({
          images: images,
        })
      })

      .catch(console.error)
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
    return (
      <Layout>
        <GalleryWrapper>
          <Gallery
            images={this.state.images.map(
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
