import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import Main from '../components/global/HomePage/MainContent'
import HomeVideo from './PerłaVideo.mp4'

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
`
