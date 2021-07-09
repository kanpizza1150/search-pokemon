import styled from 'styled-components'
import bg from '../../asset/images/bg.webp'
import { setFlex } from '../../utils/globalStyles'
export const Wrapper = styled.div`
  // background: url(${bg}) no-repeat fixed center;
  padding: 2rem 8rem;
  ${setFlex('flex-start')};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
export const Container = styled.div`
  background: url(${bg}) no-repeat fixed center;
`
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: pink;
  width: 100%;
  padding: 1rem 3rem;
`
