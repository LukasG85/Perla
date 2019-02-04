import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from '../components/global/navbar/Navbar'
import Footer from '../components/global/Footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <Nav />
          {children}
          <Footer />
          {/* <footer
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#000000',
              height: '3vh',
              color: '#ffffff',
            }}
          >
            <p style={{ marginBottom: '0' }}>
              Copright &copy; 2019{' '}
              <span
                style={{
                  paddingLeft: '2rem',
                  position: 'relative',
                  zIndex: '2',
                }}
              >
                <a
                  href="https://lukaszgancarz.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Łukasz Gancarz
                </a>
              </span>{' '}
            </p>
              </footer>*/}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
