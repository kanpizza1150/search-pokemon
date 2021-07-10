import styled from 'styled-components'
import {
  setColor,
  setFlex,
  setTransition,
  borderStyle,
} from '../../utils/globalStyles'
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
    top: 5rem;
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
    padding: 1rem;
    padding: 1rem;
    width: 100%;
  }
  .attract {
    &__wrapper {
      ${setFlex('flex-start')};
    }
  }
`
