import React from 'react'
import { TagWrapper } from './style'

interface Props {
  type: string
}
const TypeTag: React.FC<Props> = ({ type }) => {
  return <TagWrapper colorType={type}>{type}</TagWrapper>
}
export default TypeTag
