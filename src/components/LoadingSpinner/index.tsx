import React from 'react'
import pokeBall from '../../asset/images/pokeball.png'
import styled, { keyframes } from 'styled-components'
const rotate = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const Loader = styled.img`
    animation: ${rotate} 1s linear infinite;    
    height:${(props) => props.height}
}`

interface IProps {
  height: string | null | undefined
}

const LoadingSpinner: React.FC<IProps> = ({ height }) => {
  return <Loader src={pokeBall} alt='loading' height={height || '5rem'} />
}
export default LoadingSpinner
