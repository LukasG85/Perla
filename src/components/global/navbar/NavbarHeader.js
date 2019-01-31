import React, { Component } from 'react'
import { Link } from 'gatsby'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FiScissors } from 'react-icons/fi'

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link className="logo" to="/">
          <FiScissors className="scissors" />
          <h2 style={{ marginBottom: '0' }}>Perła</h2>
        </Link>
        <MdMenu className="toggle-icon" onClick={() => handleNavbar()} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${styles.colors.mainBlack};

  .logo {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 140px;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    letter-spacing: 0.3rem;
    color: ${styles.colors.mainWhite};
    ${styles.transObject({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
    .scissors {
      margin-right: 0.5rem;
    }
    @media (min-width: 992px) {
      width: 200px;
      justify-content: center;
    }
  }

  .toggle-icon {
    font-size: 2rem;
    color: ${styles.colors.mainWhite};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    background-color: transparent;
    .toggle-icon {
      display: none;
    }
    .logo {
      font-size: 2rem;
    }
  }
`
