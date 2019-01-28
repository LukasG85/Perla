import React from 'react'
import ModalBtn from './OfferModal'
import styled from 'styled-components'
import { styles } from '../../../utils'
import Img from 'gatsby-image'

// import Modalbtn from "./ModalOffer";
// import img from "../img/offer/Man.jpeg";

export default function OfferCard({ offer }) {
  const { title, price, text } = offer
  const { fixed } = offer.img

  return (
    <CardWrapper style={{ position: 'relative' }}>
      <Img fixed={fixed} className="card-img" alt={title} />
      <div className="info">
        <h3 className="title">
          {title}: <span>Od {price} zł</span>{' '}
        </h3>
        <ModalBtn text={text} title={title} />
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 320px;
  overflow: hidden;
  .card-img {
    /* width: auto; */
    height: auto;
    filter: brightness(70%);
  }
  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.8)
    );
  }

  .title {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${styles.colors.mainYellow};
    text-align: center;
    span {
      display: block;
      font-size: 2.1rem;
      margin-top: 0.4rem;
    }
  }

  @media (min-width: 576px) {
    width: 220px;
  }
  @media (min-width: 776px) {
    width: 220px;
  }

  @media (min-width: 992px) {
    width: 220px;
    .card-img {
      ${styles.transObject({})};
    }
    &:hover img {
      filter: brightness(50%);
    }
  }
`
