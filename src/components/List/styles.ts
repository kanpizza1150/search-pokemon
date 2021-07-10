import styled from 'styled-components'
import {
  setFlex,
  setTransition,
  setColor,
  borderStyle,
} from '../../utils/globalStyles'

export const ListWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  padding: 2rem;
  ${setFlex('space-around', 'flex-start')};
  flex-wrap: wrap;
  width: 100%;
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
