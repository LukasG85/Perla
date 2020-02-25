import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Gallery from '../components/gallery/Lightbox'

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
    this.pictures = []
  }

  componentDidMount() {
    // date from contentful
    const contentful = require('contentful')

    const client = contentful.createClient({
      space: `01flzezsn2j7`,
      environment: 'master', // defaults to 'master' if not set
      accessToken: `e51fb967bb4543e0a61ca9c0f2e15b7a6c0cb721d1801d36bc47d6c7ed1f4763`,
    })

    client
      .getEntries()
      .then(entries => {
        let images
        entries.items.forEach(function(entry) {
          if (entry.fields.images) {
            const imagesData = entry.fields.images

            images = imagesData.map(image => {
              return image.fields.file
            })
            return images
          }
        })

        this.pictures = [...images]
      })
      .then(() =>
        this.setState({
          images: this.pictures,
        })
      )

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
        <SEO
          title="Galeria"
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
