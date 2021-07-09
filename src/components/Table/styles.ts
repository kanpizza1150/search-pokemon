import styled from 'styled-components'
import { setColor, setTransition } from '../../utils/globalStyles'
export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: pink;
  width: 100%;
  padding: 1rem 3rem;
`
export const Row = styled.div`
  color: ${setColor.red};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  padding: 1rem 3rem;
  ${setTransition()};
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .img {
    height: 4rem;
  }
`
