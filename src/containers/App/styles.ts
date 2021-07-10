import styled from 'styled-components'
import bg from '../../asset/images/bg.webp'
import { setFlex, setColor, borderStyle } from '../../utils/globalStyles'

export const Container = styled.div`
  background: url(${bg}) no-repeat fixed center;
  min-height: 100vh;
  padding: 2rem;
  display: grid;
  grid-template-rows: 10rem 1fr;
  .search {
    &-wrapper {
      ${setFlex()};
    }
  }
  .body {
    ${setFlex()};
  }
  input {
    border: none;
    background-color: ${setColor.white};
    ${borderStyle};
    padding: 1.5rem;
    outline: none;
    max-width: 50rem;
    width: 100%;
    font-size: 2rem;
  }
`
