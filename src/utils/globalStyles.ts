import { createGlobalStyle, css } from 'styled-components'

export const setFlex = (
  x: string = 'center',
  y: string = 'center'
): object => css`
  display: flex;
  justify-content: ${x};
  align-items: ${y};}
  align-content: ${y};}
`
export const setColor: object = {
  white: '#ffffff',
  yellow: '#fbd743',
  red: '#ff1f1f',
  lightBlue: '#5db9ff',
  blue: '#363b81',
  black: '#000000',
  transparent: 'transparent',
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
