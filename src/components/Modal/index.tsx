import React from 'react'
import { ModalWrapper } from './style'
import pokeBall from '../../asset/images/pokeball.png'

interface IProps {
  children: JSX.Element | string[] | string | any
}

const Modal: React.FC<IProps> = ({ children }) => {
  return (
    <ModalWrapper>
      <img src={pokeBall} alt='pokeBall' />
      <div className='text'>{children}</div>
    </ModalWrapper>
  )
}
export default Modal
