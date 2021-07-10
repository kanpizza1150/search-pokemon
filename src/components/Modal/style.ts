import styled from 'styled-components'
import { setColor, setFlex, borderStyle } from '../../utils/globalStyles'

export const ModalWrapper = styled.div`
  background-color: ${setColor.white};
  height: 60rem;
  width: 100%;
  ${setFlex()};
  flex-direction: column;
  ${borderStyle};
  position: relative;

  img {
    width: 20rem;
  }
`
