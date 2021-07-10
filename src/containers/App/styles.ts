import styled from 'styled-components'
import bg from '../../asset/images/bg.webp'
import {
  setFlex,
  setColor,
  borderStyle,
  setTransition,
} from '../../utils/globalStyles'

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

  .search {
    &__wrapper {
      background-color: ${setColor.white};
      ${borderStyle};
      max-width: 50rem;
      width: 100%;
      ${setFlex('space-between')};
      input {
        padding: 1.5rem;
        font-size: 2rem;
        background-color: ${setColor.transparent};
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
  .search__button {
    border: none;
    outline: none;
    width: 2rem;
    font-size: 2rem;
    margin-right: 1.5rem;
    background: ${setColor.transparent};
    cursor: pointer;
    color: ${setColor.grey};
    ${setTransition()};
    &:hover {
      color: ${setColor.black};
    }
  }
`
export const LoadingWrapper = styled.div`
  ${setFlex()};
  flex-direction: column;
`
