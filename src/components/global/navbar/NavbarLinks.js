import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/Offer',
        name: 'Oferta',
      },
      {
        id: 2,
        path: '/Gallery',
        name: 'Galeria',
      },
      {
        id: 3,
        path: '/Contact',
        name: 'Kontakt',
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link
                activeStyle={{
                  color: `${styles.colors.mainYellow}`,
                }}
                onClick={() => this.props.handleNavbar()}
                to={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  position: relative;
  background-color: ${styles.colors.mainBlack};
  z-index: 2;
  li {
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  .nav-link {
    display: block;
    width: 100%;
    text-decoration: none;
    text-align: center;
    font-size: 1.3rem;
    padding: 1rem 2rem 1rem 2rem;
    color: ${styles.colors.mainWhite};
    font-weight: 300;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  height: ${props => (props.open ? `245px` : `0px`)};
  overflow: hidden;
  ${styles.transDefault};

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin: 0 30px 0 0;
    background-color: transparent;
    .nav-link {
      padding: 0.5rem 2rem 0.5rem 1.5rem;
      font-size: 1.5rem;
    }
  }
`
