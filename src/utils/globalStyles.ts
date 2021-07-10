import { createGlobalStyle, css } from 'styled-components'

export const setFlex = (x: string = 'center', y: string = 'center') => css`
  display: flex;
  justify-content: ${x};
  align-items: ${y};}
  align-content: ${y};}
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
}

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  *{
    padding: 0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
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
