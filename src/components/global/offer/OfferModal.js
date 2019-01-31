import React from 'react'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'
import { styles } from '../../../utils'
// import { url } from 'inspector'

export default class App extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <ModalWrapper>
        <button className="open-btn" onClick={this.onOpenModal}>
          Zobacz
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          showCloseIcon={false}
          center
          className="modal"
        >
          <div
            style={{
              minHeight: '40vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <h2
              className="title"
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                fontFamily: "'Roboto', sans-serif",
                textTransform: 'capitalize',
                marginBottom: '2rem',
                marginTop: '2rem',
                fontWeight: '900',
              }}
            >
              {this.props.title}
            </h2>
            <p
              className="text"
              style={{
                textAlign: 'center',
                fontSize: '1.4rem',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: '700',
              }}
            >
              {this.props.text}
            </p>
            <button className="modal-btn" onClick={this.onCloseModal}>
              Zamknij
            </button>
          </div>
        </Modal>
      </ModalWrapper>
    )
  }
}

const ModalWrapper = styled.div`
  .open-btn {
    background-color: ${styles.colors.mainYellow};
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    ${styles.transObject({})};
    color: ${styles.colors.mainWhite};
    border: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .modal {
    background-color: red !important;
  }
  .title {
    text-align: center;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
  }
`
