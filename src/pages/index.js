import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import Main from '../components/global/HomePage/MainContent'
import HomeVideo from './PerłaVideo.mp4'
import HomeBackgroundImg from '../images/home.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeBanner>
      <video
        className="video-banner"
        preload={true.toString()}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={HomeVideo} type="video/mp4" />
      </video>
      <Main />
    </HomeBanner>
  </Layout>
)

export default IndexPage

const HomeBanner = styled.div`
  height: 97vh;
  overflow: hidden;
  background: url(${HomeBackgroundImg});
  background-position: center;
  background-size:cover;
  .video-banner {
    display: none;
  }
  @media(min-width: 776px){
    background: none;
  .video-banner {
    display: block;
    height: 100%;
  }
  @media(min-width: 1900px){
  .video-banner {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-position: center;
  }
`
