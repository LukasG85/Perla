import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        Copright &copy; 2019{' '}
        <span>
          <a
            href="https://lukaszgancarz.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Łukasz Gancarz
          </a>
        </span>{' '}
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  height: 3vh;
  color: #ffffff;
  p {
    margin-bottom: 0;
    span {
      padding-left: 2rem;
      position: relative;
      z-index: 2;
      a {
        text-decoration: none;
        color: #ffffff;
        ${styles.transObject({})};
        &:hover {
          color: ${styles.colors.mainYellow};
        }
      }
    }
  }
`
