import styled from 'styled-components'
import { setColor, setFlex } from '../../utils/globalStyles'

export const CardWrapper = styled.div`
  border-radius: 3rem;
  overflow: hidden;
  height: 70rem;
  width: 40rem;
  background-color: ${setColor.white};
  padding: 2rem;
  ${setFlex('flex-start')};
  flex-direction: column;
  margin-bottom: 3rem;
  .name {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem;
  }
  .number {
    width: 100%;
    text-align: right;
    color: ${setColor.grey};
  }
  img {
    height: 10rem;
    width: unset;
    margin: 1rem 0;
  }
  .row {
    margin-bottom: 1rem;
    width: 100%;
  }
  .tag__wrapper {
    ${setFlex('flex-start')};
    flex-wrap: wrap;
  }
`
