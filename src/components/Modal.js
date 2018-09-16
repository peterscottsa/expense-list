import React from 'react'
import { spacing, colors } from 'common'
import styled from 'styled-components'
import { Close } from 'styled-icons/material/Close'
import { Route } from 'react-router'
import history from '../redux/history'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
`

const ModalContent = styled.div`
  position: relative;
  width: 600px;
  padding: ${spacing.large}px;
  background: white;
  border-radius: 3px;
`

const CloseIcon = styled(Close)`
  color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: ${spacing.medium}px;
  right: ${spacing.medium}px;
  cursor: pointer;
`

const closeModal = path => history.push(path)

const Modal = ({ children, ...props}) => (
  <Route path={props.path} render={() => (
    <Wrapper onClick={() => closeModal(props.closePath)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseIcon size="18" onClick={() => closeModal(props.closePath)} />
        { children }
      </ModalContent>
    </Wrapper>
  )} />
)

export default Modal