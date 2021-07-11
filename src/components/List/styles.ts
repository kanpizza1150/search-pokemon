import styled from 'styled-components'
import {
  setFlex,
  setTransition,
  setColor,
  borderStyle,
} from '../../utils/globalStyles'

export const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 40rem);
  grid-gap: 0.1rem 2rem;
  justify-content: center;
  margin: 0 auto;
  ${setTransition()};
`
export const ModalWrapper = styled.div`
  background-color: ${setColor.white};
  height: 60rem;
  width: 100%;
  ${setFlex()};
  flex-direction: column;
  ${borderStyle};
  .word-not-found {
    font-size: 3rem;
    color: ${setColor.grey};
    span {
      color: ${setColor.black};
      font-weight: bold;
    }
  }
`
