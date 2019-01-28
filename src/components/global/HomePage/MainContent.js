import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BannerButton } from '../../../utils'

const MainContent = () => {
  return (
    <MainWrapper>
      <h3 className="subtitle">Salon fryzjerski</h3>
      <h1 className="title">Perła</h1>
      <h4 className="owner">Anna Król Jodłowa 29A</h4>
      <Link to="/Offer/" style={{ textDecoration: 'none' }}>
        <BannerButton
          style={{
            padding: '1rem 2rem',
            marginTop: '3rem',
            fontFamily: "'Roboto', sans-serif'",
            fontSize: '2rem',
          }}
        >
          zobacz
        </BannerButton>
      </Link>
    </MainWrapper>
  )
}

export default MainContent

const MainWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  .subtitle {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 3rem;
    letter-spacing: 0.4rem;
  }
  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 10rem;
    letter-spacing: 1rem;
    font-weight: 900;
  }
  .owner {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }
`
