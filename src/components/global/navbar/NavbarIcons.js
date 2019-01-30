import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaFacebook } from 'react-icons/fa'

export default class NavbarIcons extends Component {
  render() {
    return (
      <IconWrapper>
        <a
          href="https://www.facebook.com/PerlaJodlowaAnnaKrol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="facebook-icon" />
        </a>
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  .facebook-icon {
    color: #3b579d;
    font-size: 2rem;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-right: 30px;
  }
`
