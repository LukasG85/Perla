import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { MdPhoneForwarded, MdContactMail } from 'react-icons/md'

export default function ContactInfo() {
  return (
    <InfoWrapper>
      <h1 className="title">
        <MdContactMail style={{ marginRight: '2rem' }} /> Kontakt
      </h1>
      <div className="info-wrapper">
        <div className="info">
          <h3>PERŁA Salon Fryzjerski</h3>
          <p>39-225 Jodłowa</p>
          <p>Jodłowa 29A</p>
          <p className="phone-container">
            <MdPhoneForwarded className="phone" /> 889626839
          </p>
        </div>
        <div className="open">
          <h3>Godziny otwarcia:</h3>
          <p>Poniedziałek - Piątek 9 - 17</p>
          <p>Wtorek Nieczynne</p>
          <p>Sobota 8 - 13</p>
        </div>
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  height: auto;
  font-family: 'Roboto', sans-serif;
  color: ${styles.colors.mainYellow};
  @media (min-width: 776px) {
    padding: 60px;
    border: 2px solid silver;
    background: rgba(0, 0, 0, 0.3);
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 400;
    @media (min-width: 776px) {
      font-size: 4rem;
    }
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    @media (min-width: 776px) {
      flex-direction: row;
    }
    .info {
      margin: 0;
      margin-bottom: 2rem;
      @media (min-width: 776px) {
        margin-right: 60px;
        margin-bottom: 0;
      }
    }
    h3 {
      font-size: 1.3rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
      @media (min-width: 776px) {
        font-size: 1.8rem;
        text-align: left;
        margin-bottom: 1.5rem;
      }
      @media (min-width: 992px) {
        font-size: 2.3rem;
        margin-bottom: 1.5rem;
      }
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      padding: 0.2rem 0;
      @media (min-width: 776px) {
        padding: 0.5rem 0;
        font-size: 1.5rem;
        text-align: left;
      }
    }
    .phone-container {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 776px) {
        justify-content: flex-start;
      }
      .phone {
        margin-right: 0.5rem;
      }
    }
  }
`
