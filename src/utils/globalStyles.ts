import { createGlobalStyle, css } from 'styled-components'

export const setFlex = (x: string = 'center', y: string = 'center') => css`
  display: flex;
  justify-content: ${x};
  align-items: ${y};
`
export const setTransition = (
  time: string = '0.2s',
  ele: string = 'all',
  animate: string = 'ease-in'
) => css`
  transition: ${time} ${ele} ${animate};
`

export enum setColor {
  white = '#ffffff',
  yellow = '#fbd743',
  red = '#ff1f1f',
  lightBlue = '#5db9ff',
  blue = '#363b81',
  black = '#000000',
  grey = '#c1c1c1',
  transparent = 'transparent',
  whiteTrans = 'rgba(255, 255, 255, 0.3)',
}

export const borderStyle = css`
  border-radius: 5px;
  border: 1rem solid ${setColor.black};
`

export default createGlobalStyle`
  *{
    padding: 0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Quicksand', sans-serif;
  }
  html{
    font-size:62.5%;
  }
  body{
    font-size: 1.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
  }

`
