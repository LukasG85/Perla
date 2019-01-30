import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'
import styled from 'styled-components'
import { styles } from '../../utils'
import { MdLoupe } from 'react-icons/md'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
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
  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article
          // style={{
          //   width: '200px',
          //   height: '150px',
          //   overflow: 'hidden',
          //   margin: '20px',
          // }}
          className="image-container"
          key={i}
        >
          <a
            className="image-link"
            href={obj.url}
            onClick={e => this.openLightbox(i, e)}
          >
            <img style={{ width: '100%' }} src={obj.url} alt="gallery" />
            <MdLoupe className="loup" />
          </a>

          <h3>{obj.title}</h3>
          <p>{obj.description}</p>
        </article>
      )
    })

    return (
      <div className="row" style={{ margin: '0' }}>
        <GalleryWrapper
        // style={{
        //   display: 'flex',
        //   flexWrap: 'wrap',
        //   justifyContent: 'center',
        //   margin: '0 auto',
        // }}
        >
          {gallery}
        </GalleryWrapper>{' '}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  .image-container {
    position: relative;
    width: auto;
    overflow: hidden;
    margin: 20px;
    @media (min-width: 576px) {
      width: 200px;
      height: 150px;
    }
    @media (min-width: 992px) {
      ${styles.transObject({})};
      &:hover {
        filter: brightness(40%);
      }
      .image-link {
        display: block;
        height: 100%;
        .loup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          color: transparent;
          ${styles.transObject({})};
        }
      }

      &:hover .loup {
        color: ${styles.colors.mainWhite};
        filter: brightness(200%);
      }
    }
  }
`
