import React from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'

// import Modalbtn from "./ModalOffer";
// import img from "../img/offer/Man.jpeg";

export default function OfferCard(props) {
  const { title, price, img } = props.item

  return (
    <CardWrapper style={{ position: 'relative' }}>
      <img className="card-img" src={img} alt={title} />
      <div className="info">
        <h3 className="title">
          {title}: <span>Od {price}</span>{' '}
        </h3>
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
    text-transform: capitalize;
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
