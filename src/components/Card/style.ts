import styled from 'styled-components'
import {
  setColor,
  setFlex,
  setTransition,
  borderStyle,
} from '../../utils/globalStyles'
import { ColorTags } from '../TypeTag/style'
interface ICardWrapper {
  image: string
}

export const CardWrapper = styled.div`
  overflow: hidden;
  width: 40rem;
  background-color: ${setColor.white};
  ${borderStyle};
  ${setFlex('flex-start')};
  ${setTransition()};
  flex-direction: column;
  margin-bottom: 3rem;
  position: relative;
  .name {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;
    background-color: ${setColor.red};
    color: ${setColor.white};
    width: 100%;
    height: 15rem;
    border-bottom: 1rem solid ${setColor.black};
  }
  .info {
    font-size: 1.4rem;
    margin-top: 1rem;
    width: 100%;
    ${setFlex()};
    &.footer {
      background-color: ${setColor.grey};
      padding: 0.5rem 1rem;
    }
    &__label {
      font-weight: bold;
      padding-right: 0.3rem;
    }
    &__value {
      font-weight: normal;
    }
    &__div {
      width: 100%;
      ${setFlex()};
      &.footer {
        ${setFlex('flex-start')};
      }
    }
  }
  .number {
    width: 100%;
    text-align: right;
    color: ${setColor.grey};
    padding: 1rem;
  }
  .img {
    height: 15rem;
    width: 15rem;
    margin: 1rem 0;
    background: url(${(props: ICardWrapper) => props.image}) no-repeat center;
    background-color: ${setColor.white};
    background-size: 8rem;
    ${borderStyle};
    border-radius: 50%;
    position: absolute;
    top: 6rem;
  }
  .title {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  .row {
    margin-bottom: 1rem;
    width: 100%;
  }
  .tag__wrapper {
    ${setFlex('flex-start')};
    flex-wrap: wrap;
  }
  .data__wrapper {
    padding: 0 1rem;
    width: 100%;

    &:last-child {
      margin: 1rem 0;
    }
    &.att {
      font-size: 1.5rem;
    }
    &__inline {
      ${setFlex('flex-start')};
    }
  }

  .evo {
    &__name {
      border: 2px solid ${setColor.transparent};
      border-radius: 5px;
      padding: 0.1rem 0.5rem;
      background-color: #ff999b;
      cursor: pointer;
      ${setTransition()};
      &:hover {
        border-color: ${setColor.black};
      }
    }
    &__arrow {
      margin: 0 0.7rem;
    }
    &__wrapper {
      ${setFlex('flex-start')};
    }
  }
`
export const AttractWrapper = styled.div`
  .section {
    &__sub {
      margin-bottom: 1rem;
    }
    padding-left: 1rem;
  }
  .wrapper {
    padding-left: 1rem;
    font-size: 1.4rem;

    ${setFlex('flex-start')};
  }
`
interface IAttractDamage {
  type: string
}
export const AttractDamage = styled.div<IAttractDamage>`
  border-radius: 5px;
  ${(props) => `color:${ColorTags[props.type]};
  border: 2px solid ${ColorTags[props.type]};
`};
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  margin-left: 0.5rem;
`
