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
  transparent = 'transparent',
}

export default createGlobalStyle`
    *,
    html,
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size:16px;
    }
`
