import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
// import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 2;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
