import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from '../components/global/navbar/Navbar'
import '../components/bootstrap.min.css'
import './layout.css'

// import Header from './header'
import './layout.css'
// import { FaFileExcel } from 'react-icons/fa'

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
          <footer
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
              <span style={{ paddingLeft: '2rem' }}>Łukasz Gancarz</span>{' '}
            </p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
